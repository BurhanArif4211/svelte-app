import { writable } from 'svelte/store';

// A small helper to parse `location.pathname` into { page, params }
// supports routes: "/", "/whatido", "/blog", "/blog/:id" or "/blog/:slug"
function parsePath(pathname) {
  // trim trailing slash
  let path = pathname.replace(/\/$/, '') || '/';

  // match /blog/:idOrSlug
  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return {
      page: 'post',
      params: { parameter: blogMatch[1] }
    };
  }
  (path === '/') ?path='/home': path=path; //normalize /home from /
  switch (path.toLowerCase()) {
    
    case '/home':
      return { page: 'home', params: {} };
    case '/whatido':
      return { page: 'whatido', params: {} };
    case '/blog':
      return { page: 'blog', params: {} };
    case '/design':
      return { page: 'design', params: {} };
    default:
      return { page: 'notfound', params: {} };
  }
}

function createRouter() {
  const { subscribe, set } = writable(parsePath(window.location.pathname));

  // respond to back/forward buttons
  window.addEventListener('popstate', () => {
    set(parsePath(window.location.pathname));
  });

  return {
    subscribe,

    /**
     * Navigate to a new URL, update history and our store
     * @param {string} to — absolute path, e.g. "/blog/my-post"
     */
    navigate(to) {
      const path = to.startsWith('/') ? to : `/${to}`;
      history.pushState({}, '', path);
      set(parsePath(path));
    }
  };
}

export const router = createRouter();

<script>
  // @ts-nocheck
  import BlogMD from "./BlogMD.svelte";
  import { router } from "./../../router/router";
  import { fetchBlogPost } from "./../../cachers/blogPosts";
  import { blogDataStore } from "./../../stores/blogData";
  const { navigate } = router;
  export let parameter;

  let blogData = null;
  let id = null;

  $: blogData = $blogDataStore;
  $: if (blogData) {
    if (typeof parameter === "string") {
      const foundPost = blogData.posts.find((post) => post.slug === parameter);
      id = foundPost ? foundPost.id:'';
    } else {
      id = parameter;
    }
  }

  // `postContent` will drive your <BlogMD>
  let postContent = "";

  let loading = true;
  let error = null;

  // whenever `id` changes, re-run the fetch logic
  $: if (id != null) {
    loading = true;
    error = null;
    postContent = "";

    fetchBlogPost(id)
      .then((post) => {
        postContent = post.textContent;
      })
      .catch((err) => {
        console.error(err);
        error = `<div class="h-[70vh] flex justify-center items-center">
                   <div class="text-red-300 text-2xl">Not Found</div>
                 </div>`;
      })
      .finally(() => {
        loading = false;
      });
  }
</script>

<div class="pt-10">
  <button
    aria-label="close"
    class="absolute top-4 right-4 bg-gray-900 rounded-full p-2 z-10 hover:bg-gray-700 transition-colors"
    on:click={() => navigate("/blog")}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  {#if loading}
    <div class="flex items-center justify-center h-[100vh]">
      <div>Loading…</div>
    </div>
  {:else if error}
    {@html error}
  {:else}
    <BlogMD {postContent} />
  {/if}
</div>

// @ts-nocheck
// src/lib/fetchBlogPost.js
const cache = new Map();

export async function fetchBlogPost(id) {
  const key = Number(id);

  // Return from cache if we already fetched it
  if (cache.has(key)) {
    return cache.get(key);
  }

  if (isNaN(key)||key>100) return null;

  const url = `/data/blogContent/${key}.json`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  const data = await res.json();
  // store it so we never re-fetch in this session
  cache.set(key, data);
  return data;
}

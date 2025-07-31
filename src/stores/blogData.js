// src/stores/blog.js
import { writable } from 'svelte/store';

export const blogDataStore = writable(null);

// kick off the request exactly once
fetch('/data/blogData.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => {
    blogDataStore.set(data);
  })
  .catch(err => {
    console.error('Failed to load blog data:', err);
    blogDataStore.set({ posts: [], categories: [] });
  });

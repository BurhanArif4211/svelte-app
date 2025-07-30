<!-- BlogPage.svelte -->
<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import BlogMD from "./BlogMD.svelte";
    import { currentlyViewing } from "../../stores/blogState";

  export let id;
  let postContent = "";

  onMount(async () => {
    try {
      const response = await fetch("/data/blogContent.json");
      const { postData } = await response.json();
      const entry = postData.find((item) => item.id === id);
      postContent = entry ? entry.textContent : "**No blog data was found**";
    } catch (error) {
      console.error("Error loading blog data:", error);
      postContent = "**Failed to load blog data**";
    }
  });
</script>
<div class="pt-10 text-right">
  <button
                    aria-label="close"
                    class="absolute top-4 right-4 bg-gray-900 rounded-full p-2 z-10 hover:bg-gray-700 transition-colors"
                    onclick={()=>{currentlyViewing.set(null)}}
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
<BlogMD postContent={postContent} />
</div>
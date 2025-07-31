<script>
  // @ts-nocheck
  import { marked } from "marked";
  export let postContent = "";

  // Re-render whenever postContent changes
  $: htmlContent = marked(postContent || "");
</script>

<article class="p-7 sm:p-[7rem] markdown">
  {@html htmlContent}
</article>

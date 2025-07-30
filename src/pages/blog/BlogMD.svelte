<script>
    // @ts-nocheck
    import { marked } from 'marked';
    export let postContent = '';
  
    // Re-render whenever postContent changes
    $: htmlContent = marked(postContent || '');
  </script>
  
  <article class="prose prose-invert max-w-none p-7 sm:p-[7rem] text-base sm:text-2xl">
    {@html htmlContent}
  </article>
<script lang="ts">
  export let text = '';
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { elasticOut } from 'svelte/easing';
  let isInView;
</script>


<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
{#if isInView}
  <p transition:fly={{ x: 200, duration: 1000,easing: elasticOut }} >{text}</p>
{/if}
</div>

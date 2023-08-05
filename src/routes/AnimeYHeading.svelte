<script lang="ts">
  export let text = '';
  export let ydirection ='';
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { backOut } from 'svelte/easing';
  let isInView;
</script>
<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
{#if isInView}
  <div transition:fly={{ y: ydirection, duration: 1000,easing: backOut }} >{text}</div>
{/if}
</div>

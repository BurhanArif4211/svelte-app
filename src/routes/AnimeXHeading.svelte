<script lang="ts">
  export let text = '';
  export let xdirection ='';
  export  let xtweak = '15%';

  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { backOut } from 'svelte/easing';
  let isInView;
</script>
<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: xtweak }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
{#if isInView}
  <div transition:fly={{ x: xdirection, duration: 1000,easing: backOut }} >{text}</div>
{/if}
</div>

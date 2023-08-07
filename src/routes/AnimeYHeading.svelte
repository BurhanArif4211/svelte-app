<script lang="ts">
  export let text = '';
  export let ydirection ='';
  export let xtweak ="-10%";
  export let delay = "0"
  let xdelay=parseInt(delay,10)

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
  <div transition:fly={{ y: ydirection,delay:xdelay, duration: 1000,easing: backOut }} >{text}</div>
{/if}
</div>

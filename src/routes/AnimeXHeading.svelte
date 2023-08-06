<script lang="ts">
  export let text = "";
  export let xdirection ="";
  export  let xtweak = "15%";
  export  let xdelay = "0";
  let intdelay=parseInt(xdelay, 10)


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
  <div transition:fly={{ x: xdirection, delay:intdelay ,duration: 1000,easing: backOut }} >{text}</div>
{/if}
</div>

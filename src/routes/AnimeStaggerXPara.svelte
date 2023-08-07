<script>
  import { inview } from 'svelte-inview';

    import { fly } from 'svelte/transition';
  import {backInOut} from "svelte/easing"
  
    export let text = "";
    export let xtweak = "15%";
    export let xdistance = "200";
    export let delay = "300";
    let lines = text.split('|');
    let isInView = false;

</script>
<style>
  .wrapper{
    z-index:1
  }
  p{
    display:flex;
  }
</style>
<div class="animatedLines">
    <div
    class="wrapper" 
    use:inview={{ unobserveOnEnter: true, rootMargin: xtweak }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
    >
{#each lines as line, i (i)}
    {#if isInView}
        <span transition:fly={{ delay: i * delay ,duration:2000, x: xdistance,easing:backInOut}}>{line}</span>
    {/if}
    {/each}
</div>
</div>

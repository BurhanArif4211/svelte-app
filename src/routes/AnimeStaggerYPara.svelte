<script>
  import { inview } from 'svelte-inview';

    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  import {backInOut} from "svelte/easing"
  
    export let text = "";
    export let xtweak = "15%";
    export let ydistance = '200';
    export let delay = "300";
    let lines = text.split(' | ');
    let isInView = false;

</script>
<style>
  p{
    line-height: 15px; 
  }
.animatedLines{
  position: absolute;
  display: flex;
  top: 5px;
  padding: 1.16vw;
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
        <div class="paras" transition:fly={{ delay: i * delay ,duration:2000, y: ydistance,easing:backInOut}}>{line}</div>
    {/if}
    {/each}
</div>
</div>






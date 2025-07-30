<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { tweened } from 'svelte/motion';
  
    /**
     * Props:
     * - items: string[]  // array of image file URLs
     * - interval: number // ms between auto slides (default: 5000)
     */
    export let items: string[] = [];
    export let interval: number = 5000;
    export let fit:boolean = false;
  
    let currentIndex = 0;
    let timer: ReturnType<typeof setInterval>;
  
    // Tweened value for x translation
    const translateX = tweened(0, { duration: 400 });
  
    const slideTo = (index: number) => {
      currentIndex = (index + items.length) % items.length;
      translateX.set(-currentIndex * 100);
    };
  
    const next = () => slideTo(currentIndex + 1);
    const prev = () => slideTo(currentIndex - 1);
  
    onMount(() => {
      timer = setInterval(next, interval);
    });
    onDestroy(() => clearInterval(timer));
  </script>
  
  <div class="relative overflow-hidden">
    <!-- Slides container -->
    <div class="flex transition-transform" style="transform: translateX({$translateX}%);">
      {#each items as src}
        <div class="flex-shrink-0 w-full h-64 md:h-96 lg:h-[500px]">
          <img src={src} alt='{src}' class="{fit ? 'object-contain':'object-cover'} w-full h-full" />
        </div>
      {/each}
    </div>
  {#if items.length > 1}
    <!-- Arrows -->
    <button
        aria-label="image slider previous button"
      onclick={prev}
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 hover:bg-white/80 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  
    <button
        aria-label="image slider next button"
      onclick={next}
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 hover:bg-white/80 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  
    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {#each items as _, i}
        <button
            aria-label="button"
          class="w-3 h-3 rounded-full focus:outline-none"
          class:selected={i === currentIndex}
          onclick={() => slideTo(i)}
          style="background-color: {i === currentIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)'}">
        </button>
      {/each}
    </div>
    {/if}
  </div>
  <style>
    /* Allow sizing flexibility via parent container width */
    :global(.slider-container) {
      width: 100%;
      max-width: 800px; /* override as needed */
      margin: auto;
    }
  </style>
  
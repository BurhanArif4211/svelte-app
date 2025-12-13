<!-- src/components/LatestThuweets.svelte -->
<script>
  import { onMount } from 'svelte';
  import { getAllThuweets } from '../services/thuweets.js';
  import ThuweetCard from './ThuweetCard.svelte';
  import { router } from "../router/router.js";
  export let limit = 1;
  export let title = "Latest Thuweets";
  export let showViewAll = true;
  
  let thuweets = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      thuweets = await getAllThuweets(limit);
    } catch (err) {
      error = 'Failed to load thuweets';
      console.error(err);
    } finally {
      loading = false;
    }
  });
</script>

<div class="bg-gradient-to-br from-[#1a0335] to-[#0f0120] rounded-2xl p-6 border border-purple-900/50">
  <h2 class="text-xl font-bold text-white mb-4 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
    {title}
  </h2>
  
  {#if loading}
    <div class="space-y-4">
      {#each Array(limit).fill(0) as _, i}
        <div class="bg-purple-900/20 rounded-2xl p-4 animate-pulse">
          <div class="flex space-x-3">
            <div class="rounded-full bg-purple-800 h-10 w-10"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-purple-800 rounded w-1/4"></div>
              <div class="h-4 bg-purple-800 rounded"></div>
              <div class="h-4 bg-purple-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else if error}
    <div class="text-center py-6 text-purple-300">
      <p>{error}</p>
    </div>
  {:else if thuweets.length === 0}
    <div class="text-center py-6 text-purple-300">
      <p>No thuweets yet</p>
    </div>
  {:else}
    <div class="space-y-4">
      {#each thuweets as thuweet}
        <ThuweetCard {thuweet} />
      {/each}
    </div>
  {/if}
  
  {#if showViewAll && thuweets.length > 0}
    <div class="mt-6 text-center">
      <a onclick={()=> router.navigate('/thuweets') } class="cursor-pointer inline-block text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
        
        View all thuweets →
      </a>
    </div>
  {/if}
</div>

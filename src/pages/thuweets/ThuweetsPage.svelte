<!-- src/pages/thuweetsPage.svelte -->
<script>
  import { onMount } from 'svelte';
  import { getThuweetMonths, getThuweetsByMonth } from './../../services/thuweets.js';
  import ThuweetCard from './../../components/ThuweetCard.svelte';
  
  let months = [];
  let selectedMonth = null;
  let thuweets = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      months = await getThuweetMonths();
      if (months.length > 0) {
        selectedMonth = months[0].filename;
        await loadMonthThuweets(selectedMonth);
        console.log('Selected Month:' + selectedMonth);
        
      }else{
console.log('No thuweets yet!')
}

    } catch (err) {
      error = 'Failed to load thuweets';
      console.error(err);
    } finally {
      loading = false;
    }
  });
  
  async function loadMonthThuweets(monthFile) {
    try {
      loading = true;
      thuweets = await getThuweetsByMonth(monthFile);
      console.log('Thuweet loaded: ' + thuweets.toString())
      selectedMonth = monthFile;
    } catch (err) {
      error = `Failed to load thuweets for ${monthFile}`;
      console.error(err);
    } finally {
      loading = false;
    }
  }
  
  // Get display name for month file
  function getMonthDisplayName(monthFile) {
    const month = months.find(m => m.filename === monthFile);
    return month ? month.display : monthFile.replace('.json', '');
  }
</script>

<section class="min-h-screen bg-gradient-to-br from-[#260138] to-[#0f011f] text-white py-20 px-4 sm:px-6">
  <div class="max-w-3xl mx-auto">
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Thuweets
      </h1>
      <p class="text-xl text-gray-300">
        My thoughts, ideas and oppinions. You don't have to agree. 
      </p>
    </div>
    
    <!-- Month Selector -->
    {#if months.length > 0}
      <div class="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
        <div class="flex space-x-2">
          {#each months as month}
            <button
              class={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${selectedMonth === month.filename ? 'bg-purple-700 text-white' : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/50'}`}
              on:click={() => loadMonthThuweets(month.filename)}
            >
              {month.display}
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Content -->
    {#if loading}
      <div class="space-y-4">
        {#each Array(5).fill(0) as _, i}
          <div class="bg-purple-900/20 rounded-2xl p-5 animate-pulse">
            <div class="flex space-x-3">
              <div class="rounded-full bg-purple-800 h-10 w-10"></div>
              <div class="flex-1 space-y-3">
                <div class="flex justify-between">
                  <div class="h-4 bg-purple-800 rounded w-1/4"></div>
                  <div class="h-4 bg-purple-800 rounded w-1/6"></div>
                </div>
                <div class="h-4 bg-purple-800 rounded"></div>
                <div class="h-4 bg-purple-800 rounded w-3/4"></div>
                <div class="h-4 bg-purple-800 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else if error}
      <div class="text-center py-10">
        <div class="text-5xl mb-4">⚠️</div>
        <p class="text-xl text-red-400">{error}</p>
        <p class="mt-4 text-gray-400">Please try again later</p>
      </div>
    {:else if thuweets.length === 0}
      <div class="text-center py-10">
        <div class="text-5xl mb-4">💬</div>
        <p class="text-xl text-purple-300">No thuweets for this period</p>
        <p class="mt-2 text-gray-400">Check back later for new thoughts and ideas</p>
      </div>
    {:else}
      <div class="space-y-6">
        {#each thuweets as thuweet}
          <ThuweetCard {thuweet} size={'normal'}/>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>

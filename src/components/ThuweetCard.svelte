<!-- src/components/ThuweetCard.svelte -->
<script>
  export let thuweet;
  export let size = 'normal'; // 'normal' or 'compact'
  
  // Format date relative to now or as full date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };
</script>

<div class="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-2xl p-5 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300">
  <div class="flex items-start space-x-3">
    <!-- Profile avatar placeholder -->
    <div class="flex-shrink-0">
      <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center">
        <span class="text-white font-bold">T</span>
      </div>
    </div>
    
    <div class="flex-grow min-w-0">
      <!-- Header with name and date -->
      <div class="flex justify-between items-baseline mb-2">
        <div class="flex items-center">
          <span class="font-bold text-white mr-2">Thuwarak</span>
          <span class="text-purple-400 text-sm">@thuwarak</span>
        </div>
        <span class="text-gray-400 text-sm">{formatDate(thuweet.date)}</span>
      </div>
      
      <!-- Content -->
      <p class="text-white mb-3 whitespace-pre-line">{thuweet.content}</p>
      
      <!-- Hashtags -->
      {#if thuweet.hashtags && thuweet.hashtags.length > 0}
        <div class="flex flex-wrap gap-2 mb-3">
          {#each thuweet.hashtags as tag}
            <span class="text-purple-400 text-sm">#{tag}</span>
          {/each}
        </div>
      {/if}
      

    </div>
  </div>
</div>

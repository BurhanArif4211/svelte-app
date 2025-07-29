<script>
    import { onMount, onDestroy } from 'svelte';
    import { currentPage } from './../stores/navState.js';
    let menuOpen = false;
    let lastScrollY = 0;
    let visible = true;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        visible = false;
      } else {
        visible = true;
      }
      lastScrollY = currentScrollY;
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onDestroy(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  
    function navigate(page) {
      currentPage.set(page);
      menuOpen = false;
    }
  </script>
  
  <nav
    id="navbar"
    class="fixed top-0 left-0  z-50 transform transition-transform duration-300 ease-in-out"
    class:translate-y-0={visible}
    class:-translate-y-full={!visible}
  >
    <div class="sm:w-full w-[80px] backdrop-blur-lg shadow-md rounded-b-full px-6 py-3 flex items-center justify-between ">
      <div class="text-xl font-bold">
      </div>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li onclick={() => navigate('home')} class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2">
          <!-- svelte-ignore a11y_missing_attribute -->
          <a class="text-lg font-medium flex items-center">
            <span class="mr-2 text-shadow-none">👤</span> about
          </a>
        </li>
        <li onclick={() => navigate('WhatIDo')} class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2">
          <a class="text-lg font-medium flex items-center">
            <span class="mr-2 text-shadow-none">💼</span> what i do
          </a>
        </li>
        <li onclick={() => navigate('Blog')} class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2">
          <a class="text-lg font-medium flex items-center">
            <span class="mr-2 text-shadow-none">📝</span> blog
          </a>
        </li>
      </ul>
      <!-- Mobile Hamburger -->
      <button
        class="md:hidden focus:outline-none items-center"
        onclick={() => (menuOpen = !menuOpen)}
        aria-label="Toggle menu"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if menuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  
    <!-- Mobile Menu -->
    {#if menuOpen}
      <div class="md:hidden backdrop-blur-lg shadow-inner rounded-2xl">
        <ul class="flex flex-col space-y-2 p-4">
          <li onclick={() => navigate('home')} class="cursor-pointer  bg-[#c756ff19] rounded-full px-4 py-2">
            <a class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg">
              <span class="mr-2 text-shadow-none">👤</span> about
            </a>
          </li>
          <li onclick={() => navigate('WhatIDo')} class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2">
            <a class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg">
              <span class="mr-2 text-shadow-none">💼</span> what i do
            </a>
          </li>
          <li onclick={() => navigate('Blog')} class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2">
            <a class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg">
              <span class="mr-2 text-shadow-none">📝</span> blog
            </a>
          </li>
        </ul>
      </div>
    {/if}
  </nav>
  
<!-- <script>
import { currentPage } from './../stores/navState.js';
</script>

<nav id="navbar" class="fixed top-0 left-0 w-full z-50">
    <div
        class="shadow-amber-400 backdrop-blur-xl w-full rounded-b-full px-6 py-3 flex items-center justify-center">
        <ul class="flex space-x-8 h-full items-center">
            <li onclick={()=>{currentPage.set('home')}} class="cursor-pointer mr-15 bg-[#c756ff19] rounded-full pr-15">
                <a class="text-lg font-medium flex items-center">
                    <span class="m-4">👤</span> about
                </a>
            </li>
            <li onclick={()=>{currentPage.set('WhatIDo')}} class="cursor-pointer mr-15 bg-[#c756ff19] rounded-full pr-15">
                <a class="text-lg font-medium flex items-center">
                    <span class="m-4">💼</span> what i do
                </a>
            </li>
            <li onclick={()=>{currentPage.set('Blog')}} class="cursor-pointer mr-15 bg-[#c756ff19] rounded-full pr-15">
                <a class="text-lg font-medium flex items-center">
                    <span class="m-4">📝</span> blog
                </a>
            </li>
        </ul>
    </div>
</nav> -->

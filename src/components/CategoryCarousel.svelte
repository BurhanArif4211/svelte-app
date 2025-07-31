<script lang="ts">
    import { onMount } from 'svelte';
    import BlogCard from './BlogCard.svelte';
    
    export let title: string;
    export let posts: any[];
    
    let carousel: HTMLElement;
    let scrollPosition = 0;
    
    const scrollLeft = () => {
        scrollPosition = Math.max(0, scrollPosition - 300);
        carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };
    
    const scrollRight = () => {
        scrollPosition = Math.min(
            carousel.scrollWidth - carousel.clientWidth, 
            scrollPosition + 300
        );
        carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };
    
    onMount(() => {
        // Initialize scroll position
        scrollPosition = carousel.scrollLeft;
    });
</script>
{#if posts.length}
<div class="mb-16">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold ">{title}</h2>
        {#if posts.length >1}
        <div class="flex space-x-3">
            <button 
                onclick={scrollLeft}
                class="bg-[#3e3045] hover:bg-purple-600 rounded-full p-2 focus:outline-none transition-colors"
                aria-label="Scroll left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onclick={scrollRight}
                class="bg-[#3e3045] hover:bg-purple-600 rounded-full p-2 focus:outline-none transition-colors"
                aria-label="Scroll right"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        {/if}
    </div>
    
    <div 
        bind:this={carousel}
        class="flex overflow-x-auto gap-6 pb-8 scrollbar-hide"
        style="scrollbar-width: none; -ms-overflow-style: none;"
    >
        {#each posts as post}
            <div class="flex-shrink-0 w-80">
                <BlogCard {post} />
            </div>
        {/each}
    </div>
</div>
{/if}
<style>
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
</style>
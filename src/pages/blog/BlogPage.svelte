<script lang="ts">
    import { onMount } from 'svelte';
    import CategoryCarousel from './../../components/CategoryCarousel.svelte';
    import BlogCard from '../../components/BlogCard.svelte';
    import {currentlyViewing} from "./../../stores/blogState";
    let blogData = {
        categories: [],
        posts: []
    };
    
    let filteredPosts = {};
    
    onMount(async () => {
        try {
            // In a real app, you might fetch this from an API
            // For now, we'll simulate a fetch
            const response = await fetch('/data/blogData.json');
            const data = await response.json();
            blogData = data;
            
            // Organize posts by category
            blogData.categories.forEach(category => {
                filteredPosts[category] = blogData.posts.filter(
                    post => post.category === category
                );
            });
        } catch (error) {
            console.error('Error loading blog data:', error);
        }
    });
</script>

<section class="min-h-screen py-20 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Blog
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
               My thoughts on technology, society, and literature
            </p>
        </div>
        
        <!-- Featured Post -->
        {#if blogData.posts.length > 0}
            <div class="mb-20">
                <h2 class="text-2xl font-bold mb-6">Featured Post</h2>
                <div class="bg-gradient-to-tr from-[#460058] to-[#1b003d] rounded-2xl overflow-hidden shadow-xl">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img 
                                src={blogData.posts[0].thumbnail} 
                                alt={blogData.posts[0].title} 
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="md:w-1/2 p-8 flex flex-col justify-between">
                            <div>
                                <span class="bg-purple-600 text-sm px-3 py-1 rounded-full mb-4 inline-block">
                                    {blogData.posts[0].category}
                                </span>
                                <h3 class="text-3xl font-bold mb-4">{blogData.posts[0].title}</h3>
                                <p class="text-gray-300 mb-6">{blogData.posts[0].excerpt}</p>
                            </div>
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div>
                                <!-- svelte-ignore a11y_click_events_have_key_events -->
                                <!-- svelte-ignore a11y_missing_attribute -->
                                <a 
                                    onclick={()=>{
                                        currentlyViewing.set(blogData.posts[0].id)
                                    }}
                                    class="inline-block bg-purple-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                >
                                    Read Full ->
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
        
        <!-- Category Carousels -->
        {#each blogData.categories as category}
            <CategoryCarousel 
                title={category} 
                posts={filteredPosts[category]} 
            />
        {/each}
        
        <!-- All Posts Grid -->
        <div class="mt-20">
            <h2 class="text-3xl font-bold mb-8">All Articles</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each blogData.posts as post}
                    <BlogCard {post} />
                {/each}
            </div>
        </div>
    </div>
</section>

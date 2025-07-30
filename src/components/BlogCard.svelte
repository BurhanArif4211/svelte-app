<script lang="ts">
    import { currentlyViewing } from "../stores/blogState";
    import Tabletdisplay from "./Tabletdisplay.svelte";

    export let post: {
        id: number;
        title: string;
        excerpt: string;
        category: string;
        date: string;
        thumbnail: string;
        readTime: string;
        tags: string[];
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<article
onclick={()=>{
    currentlyViewing.set(post.id)
}}
class="bg-gradient-to-tr from-[#460058] to-[#1b003d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
    <div class="relative h-48 overflow-hidden">
        <img 
            src={post.thumbnail} 
            alt={post.title} 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div class="absolute top-3 right-3 bg-purple-600 text-xs px-3 py-1 rounded-full">
            {post.category}
        </div>
    </div>
    
    <div class="p-5 flex-grow flex flex-col">
        <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-400">{post.date}</span>
            <span class="text-sm text-amber-400">{post.readTime} read</span>
        </div>
        
        <h3 class="text-xl font-bold mb-3">{post.title}</h3>
        <p class="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
        
        <div class="flex flex-wrap gap-2">
            <Tabletdisplay DisplayTextOnly={true} items ={post.tags}></Tabletdisplay>
        </div>
    </div>
</article>
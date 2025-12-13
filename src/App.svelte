<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { router } from "./router/router.js";

    import { projectsStore } from "./stores/projects.js";

    import Navigga from "./parts/Navigga.svelte";
    import Index from "./pages/index/Index.svelte";
    import Feeter from "./parts/Feeter.svelte";
    import WhatIDo from "./pages/WhatIDo/WhatIDo.svelte";
    import BlogPage from "./pages/blog/BlogPage.svelte";
    import BlogPostView from "./pages/blog/BlogPostView.svelte";
    import ThuweetsPage from "./pages/thuweets/ThuweetsPage.svelte";
    // subscribe to { page, params }
    let page, params;
    router.subscribe((r) => {
        page = r.page;
        params = r.params;
    });
</script>

<main class="bg-[#260138]">
    <Navigga />
    {#if page === "home"}
        <Index />
    {:else if page === "whatido"}
        {#if $projectsStore === null}
            <div class="flex items-center justify-center h-[100vh]">
                <div class="">Loading...</div>
            </div>
        {:else}
            <WhatIDo projects={$projectsStore} />
        {/if}
    {:else if page === "blog"}
        <BlogPage />
    {:else if page === "design"}
        <div class="h-[100vh] flex justify-center items-center">
            <div class="text-3xl text-green-300">Under Construction</div>
        </div>
    {:else if page === "post"}
        <BlogPostView parameter={!Number(params.parameter) ? params.parameter : Number(params.parameter)} />
    {:else if page === "thuweets"}
        <ThuweetsPage/>
    {:else}
        <div class="h-[100vh] flex justify-center items-center">
            <div class="text-red-300 text-2xl">Not Found</div>
        </div>
    {/if}
    <Feeter />
</main>

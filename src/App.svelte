<script>
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
	import CV from "./pages/cv/CV.svelte";
	import Security from "./pages/security/Security.svelte";
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
			<div class="text-center py-20">
				<div
					class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"
				></div>
				<p>Loading projects data...</p>
			</div>
		{:else}
			<WhatIDo projects={$projectsStore} />
		{/if}
	{:else if page === "blog"}
		<BlogPage />
	{:else if page === "design"}
		<div class="h-screen flex justify-center items-center">
			<div class="text-3xl text-green-300">Under Construction</div>
		</div>
	{:else if page === "post"}
		<BlogPostView
			parameter={!Number(params.parameter)
				? params.parameter
				: Number(params.parameter)}
		/>
	{:else if page === "thuweets"}
		<ThuweetsPage />
	{:else if page === "cv"}
		<CV />
	{:else if page === "security"}
		{#if $projectsStore === null}
			<div class="text-center py-20">
				<div
					class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"
				></div>
				<p>Loading projects data...</p>
			</div>
		{:else}
			<Security allProjects={$projectsStore} />
		{/if}
	{:else}
		<div class="h-screen flex justify-center items-center">
			<div class="text-red-300 text-2xl">Not Found</div>
		</div>
	{/if}
	<Feeter />
</main>

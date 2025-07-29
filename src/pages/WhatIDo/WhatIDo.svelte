<script context="module">
    export type Project = {
        id: string;
        title: string;
        type: "web" | "android";
        description: string;
        images: {
            url: string;
            caption: string;
            aspectRatio: "landscape" | "portrait" | "square";
        }[];
        technologies: string[];
        links?: {
            github?: string;
            liveDemo?: string;
            playStore?: string;
        };
    };
</script>

<script lang="ts">
    import Card from "../../components/Card.svelte";
    import Tabletdisplay from "../../components/Tabletdisplay.svelte";

    // Props
    export let projects: Project[] = [];
    let selectedProject: Project | null = null;

    // Filter projects by type
    let filter: "all" | "web" | "android" = "all";
    const filteredProjects = () => {
        if (filter === "all") return projects;
        return projects.filter((p) => p.type === filter);
    };

    // Select a project for detailed view
    const selectProject = (project: Project) => {
        selectedProject = project;
        document.body.classList.add("overflow-hidden");
    };

    // Close detailed view
    const closeDetail = () => {
        selectedProject = null;
        document.body.classList.remove("overflow-hidden");
    };

    // Keyboard navigation
    const handleKeydown = (e: KeyboardEvent) => {
        if (selectedProject && e.key === "Escape") {
            closeDetail();
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen py-12 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1
                class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            >
                Projects Gallery
            </h1>
            <p class="text-xl  max-w-3xl mx-auto">
                Showcase of Projects I have made throughout the years
            </p>
        </div>

        <!-- Filters -->
        <div style="" class="filters-tablets flex justify-center mb-10 space-x-4 overflow-x-auto w-full">
            <button
                class={`px-6 py-2 border-[#f6deff90] rounded-full transition-all sm:px-3 sm:py-2 text-nowrap text-base sm:text-base ml-[10rem] ${filter === "all" ? "bg-[#8200DB]" : "bg-[#260138] border-[3px] hover:bg-[#7317a0] "}`}
                onclick={() => (filter = "all")}
            >
                All Projects
            </button>
            <button
                class={`px-6 py-2 border-[#f6deff90] rounded-full transition-all sm:px-3 sm:py-2 text-nowrap text-base sm:text-base ${filter === "web" ? "bg-[#8200DB]" : "bg-[#260138] border-[3px] hover:bg-[#7317a0] "}`}
                onclick={() => (filter = "web")}
            >
                Web Apps
            </button>
            <button
                class={`px-6 py-2 border-[#f6deff90] rounded-full transition-all sm:px-3 sm:py-2 text-nowrap text-base sm:text-base ${filter === "android" ? "bg-[#8200DB]" : "bg-[#260138] border-[3px] hover:bg-[#7317a0] "}`}
                onclick={() => (filter = "android")}
            >
                Android Apps
            </button>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects() as project (project.id)}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                    onclick={() => selectProject(project)}
                >
                    <Card type="custom" customBg='bg-gradient-to-tr from-[#460058] to-[#1b003d]' size="lg">
                        <!-- Project Thumbnail -->
                        <div class="relative h-48 overflow-hidden">
                            {#if project.images[0]}
                                <img
                                    src={project.images[0].url}
                                    alt={project.title}
                                    class="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 "
                                />
                            {:else}
                                <div
                                    class="bg-gray-700 w-full h-full flex items-center justify-center"
                                >
                                    <div class="text-gray-400 text-4xl">
                                        {project.type === "web" ? "🌐" : "📱"}
                                    </div>
                                </div>
                            {/if}
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4f008497] to-transparent p-4"
                            >
                                <h3 class="text-xl font-bold">
                                    {project.title}
                                </h3>
                                <div class="flex items-center mt-1">
                                    <span
                                        class={`px-2 py-1 text-xs rounded-full ${project.type === "web" ? "bg-cyan-700" : "bg-emerald-700"}`}
                                    >
                                        {project.type === "web"
                                            ? "Web App"
                                            : "Android App"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Project Info -->
                        <div class="p-5">
                            <p class="text-gray-300 line-clamp-2">
                                {project.description}
                            </p>
                            <div class="mt-4 flex flex-wrap gap-2">
                                <Tabletdisplay DisplayTextOnly={true} items={project.technologies}></Tabletdisplay>
                            </div>
                        </div>
                    </Card>
                </div>
            {/each}
        </div>

        <!-- Empty State -->
        {#if filteredProjects().length === 0}
            <div class="text-center py-20">
                <div class="text-6xl mb-4">📂</div>
                <h3 class="text-2xl font-bold mb-2">No projects found</h3>
                <p class="text-gray-400 max-w-md mx-auto">
                    Try selecting a different filter or check back later for new
                    projects
                </p>
            </div>
        {/if}
    </div>

    <!-- Project Detail Modal -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    {#if selectedProject}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="fixed inset-0 bg-[#0000005f] z-50 flex items-center justify-center p-4 overflow-auto "
            onclick={closeDetail}
        >
            <div
                class="relative max-w-4xl w-full backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
                <button
                    aria-label="close"
                    class="absolute top-4 right-4 bg-gray-900 rounded-full p-2 z-10 hover:bg-gray-700 transition-colors"
                    onclick={closeDetail}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <!-- Project Header -->
                <div class="p-6 sm:p-8">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                        <div>
                            <h2 class="text-3xl font-bold">
                                {selectedProject.title}
                            </h2>
                            <div class="flex items-center mt-2">
                                <span
                                    class={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.type === "web" ? "bg-cyan-700" : "bg-emerald-700"}`}
                                >
                                    {selectedProject.type === "web"
                                        ? "Web Application"
                                        : "Android Application"}
                                </span>
                            </div>
                        </div>

                        <!-- Links -->
                        {#if selectedProject.links}
                            <div class="flex space-x-3">
                                {#if selectedProject.links.github}
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        class="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors mr-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-5 h-5"
                                        >
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            />
                                        </svg>
                                    </a>
                                {/if}
                                {#if selectedProject.links.liveDemo}
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a href={selectedProject.links.liveDemo} target="_blank" class="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                {/if}
                                {#if selectedProject.links.playStore}
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a
                                        href={selectedProject.links.playStore}
                                        target="_blank"
                                        class="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                                            />
                                        </svg>
                                    </a>
                                {/if}
                            </div>
                        {/if}
                    </div>
                </div>

                <!-- Project Content -->
                <div class="p-6 sm:p-8">
                    <!-- Description -->
                    <div class="mb-8">
                        <h3 class="text-xl font-bold mb-3">Description</h3>
                        <p class="text-gray-300 leading-relaxed">
                            {selectedProject.description}
                        </p>
                    </div>

                    <!-- Technologies -->
                    <div class="mb-8">
                        <h3 class="text-xl font-bold mb-3">
                            Technologies Used
                        </h3>
                        <Tabletdisplay DisplayTextOnly={true} items={selectedProject.technologies}></Tabletdisplay>
                        <!-- <div class="flex flex-wrap gap-2">
                            {#each selectedProject.technologies as tech}
                                <span
                                    class="px-3 py-1.5 rounded-full text-sm"
                                    >{tech}</span
                                >
                            {/each}
                        </div> -->
                    </div>

                    <!-- Screenshots Gallery -->
                    <div class="mb-8">
                        <h3 class="text-xl font-bold mb-4">Screenshots</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {#each selectedProject.images as image, i}
                                <div
                                    class="group relative overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image.url}
                                        alt={`Screenshot ${i + 1} of ${selectedProject.title}`}
                                        class={`w-full object-cover transition-transform duration-500 group-hover:scale-102 ${
                                            image.aspectRatio === "landscape"
                                                ? "h-56"
                                                : image.aspectRatio ===
                                                    "portrait"
                                                  ? "h-full"
                                                  : ""
                                        }`}
                                    />
                                    {#if image.caption}
                                        <div
                                            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <p class="text-sm text-gray-200">
                                                {image.caption}
                                            </p>
                                        </div>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .filters-tablets::-webkit-scrollbar{
    display: none;
    }
</style>

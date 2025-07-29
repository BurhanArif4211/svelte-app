<script>
// @ts-nocheck
  import Navigga from './parts/Navigga.svelte';
  import Index from './pages/index/Index.svelte';
  import Feeter from './parts/Feeter.svelte';
  import {currentPage} from './stores/navState.js'
  import WhatIDo from './pages/WhatIDo/WhatIDo.svelte';


    const projects = [
        {
            id: 'pp-1',
            title: 'Travel Partner',
            type: 'web',
            description: "A utility app for people to share rides and increase society's efficiency.",
            images: [
              {
                  url: 'img/App Dev/travelPartner/login.png',
                  caption: 'login Page',
                  aspectRatio: 'landscape'
              },
              {
                  url: 'img/App Dev/travelPartner/Dashboard-addRoute.png',
                  caption: 'add a route on the dashboard',
                  aspectRatio: 'landscape'
              },
              {
                  url: 'img/App Dev/travelPartner/Dashboard.png',
                  caption: 'dashboard of the app',
                  aspectRatio: 'landscape'
              },
              {
                  url: 'img/App Dev/travelPartner/Dashboard-connect.png',
                  caption: 'connection requests on the home page',
                  aspectRatio: 'landscape'
              },
              {
                  url: 'img/App Dev/travelPartner/Dashboard-connected.png',
                  caption: 'connected view on the dashboard',
                  aspectRatio: 'landscape'
              },
            ],
            technologies: ['Java', 'Javalin', 'SQLite', 'JWT','HTMX','Web'],
            links: {
                github: 'https://github.com/burhanarif4211/TravelPartner.git',
                // playStore: 'https://play.google.com/store/apps/details?id=com.example.weather'
            }
        },
        {
            id: 'project-2',
            title: 'Home Chef AI',
            type: 'mobile',
            description: 'AI Powered culinery app to allow easy cooking.',
            images: [

                {
                    url: 'img/App Dev/HomeChef/welcomeScreen.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/Architecture_diagram.png',
                    caption: '',
                    aspectRatio: 'landscape'
                },
                {
                    url: 'img/App Dev/HomeChef/dashboard.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/aiSugestion.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/aiSuggestion-input.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/aiSuggestion-output.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/groceryList.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/DefaultRecipeList.png',
                    caption: '',
                    aspectRatio: 'portrait'
                },
                {
                    url: 'img/App Dev/HomeChef/suggestionList.png',
                    caption: '',
                    aspectRatio: 'portrait'
                }
            ],
            technologies: ['Express', 'Node.js', 'React', 'Firebase', 'Cordova'],
            links: {
                github: 'https://github.com/BurhanArif4211/HomeChefAI-MobileApp',
                // liveDemo: 'https://ecom-demo.example.com'
            }
        }
    ];
</script>

<main class="bg-[#260138]">
  <Navigga />
  {#if $currentPage === 'home'}
  <Index />
  {:else if $currentPage === 'WhatIDo'}
  <WhatIDo projects={projects}></WhatIDo>
  {:else if $currentPage === 'Blog'}
  <div class="flex justify-center items-center text-9xl bg-[#260138] p-[10rem]">Blog</div>
  {/if}
  <Feeter/>
</main>
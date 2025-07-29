<script>
import { currentPage } from './../stores/navState.js';
</script>
<nav id="navbar" class="fixed top-0 left-0 w-full z-50">
    <div
        class="shadow-amber-400 backdrop-blur-xl w-full rounded-b-full px-6 py-3 flex items-center justify-center">
        <ul class="flex space-x-8 h-full items-center">
            <li onclick={()=>{currentPage.set('home')}} class="cursor-pointer mr-15 bg-[#c756ff19] rounded-full pr-15">
                <!-- svelte-ignore a11y_missing_attribute -->
                <a class="text-lg font-medium flex items-center">
                    <span class="m-4">👤</span> about
                </a>
            </li>
            <li onclick={()=>{currentPage.set('WhatIDo')}} class="cursor-pointer mr-15 bg-[#c756ff19] rounded-full pr-15">
                <!-- svelte-ignore a11y_missing_attribute -->
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
</nav>

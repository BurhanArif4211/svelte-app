<script>
    // @ts-ignore
    import "./Index.css";
    import Slider from "../../components/Slider.svelte";
    import Button from "../../components/Button.svelte";
    import { currentPage } from "./../../stores/navState";
  
    const greetingList = [
        "Howdy!",
        "Aloha!",
        "Bonjour!",
        "Hey There!",
        "Greetings!",
        "How's it hangin'?",
        "What's shakin'?",
        "Top of the morning to ya!",
        "Hello!",
        "What's the buzz?",
        "Salute, amigo!",
        "أهلا وسهلا",
        "السلام عليكم",
        "سلام",
        "Hallo",
        "Ciao",
        "Selamat",
        "خوش آمدید",
        
    ];
    let greeting = greetingList[Math.floor(Math.random() * greetingList.length)];
  </script>
  
  <!-- Hero Section -->
  <div
    class="bg-[url('/img/hero-pattren.jpg')] h-[100vh] bg-repeat bg-[length:500px] p-10 md:p-[12rem] flex justify-center items-center flex-col"
  >
    <div class="hero backdrop-blur-md rounded-2xl p-6 md:p-8">
      <div class="headline mb-6">
        <h1
          class="text-4xl md:text-[4rem] bg-gradient-to-t from-[#6cffd0] to-[#ffffff] bg-clip-text text-transparent font-extrabold font-sans"
        >
          {greeting}
        </h1>
      </div>
  
      <div class="cont grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4 text-2xl md:text-[3rem] font-light">
          <p>I am <b class="text-[#6cffd0]">Burhan</b></p>
          <p>I love <b class="text-[#6cffd0]">computers</b></p>
          <p>I like to <b class="text-[#6cffd0]">design</b></p>
          <p>I like to <b class="text-[#6cffd0]">program</b></p>
          <p>I use Arch BTW.</p>
          <Button onclick={() => currentPage.set('WhatIDo')} variant="trablur" size="lg">
            See My Work &rarr;
          </Button>
        </div>
  
        <!-- Hide slider on mobile -->
        <div class="hidden md:block">
          <Slider
            items={[
              "https://placehold.co/200x400",
              "https://placehold.co/200x400",
              "https://placehold.co/200x400",
            ]}
          />
        </div>
      </div>
    </div>
  
    <!-- Scroll Indicator -->
    <div class="text-center mt-8 md:mt-20">
      <div class="scroll-down inline-block animate-bounce">
        <svg
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <p class="mt-2 uppercase tracking-wide text-sm">Scroll</p>
    </div>
  </div>
  
  <!-- Showcase Section -->
  <div class="w-full min-h-screen p-8 md:p-[5rem] bg-[#260138] flex items-start justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-2xl md:text-4xl font-light">
      <!-- Literature -->
      <div class="flex flex-col space-y-4 text-[#6cffd0]">
        <span>Literature</span>
        <div class="">
          <Slider items={["https://placehold.co/200x400"]} />
        </div>
        <Button onclick={() => currentPage.set('Blog')} variant="primary">
          Read Blog &rarr;
        </Button>
      </div>
  
      <!-- Programming / Dev -->
      <div class="flex flex-col space-y-4 text-[#6cffd0]">
        <span>Programming / Dev</span>
        <div class="">
          <Slider items={["https://placehold.co/200x400"]} />
        </div>
        <Button onclick={() => currentPage.set('Projects')} variant="primary">
          View Projects &rarr;
        </Button>
      </div>
  
      <!-- Design -->
      <div class="flex flex-col space-y-4 text-[#6cffd0]">
        <span>Design</span>
        <div class="">
          <Slider items={["https://placehold.co/200x400"]} />
        </div>
        <Button onclick={() => currentPage.set('Design')} variant="primary">
          View &rarr;
        </Button>
      </div>
    </div>
  </div>
  

<!-- <script>
    // @ts-ignore
    import "./Index.css";
    import Slider from "../../components/Slider.svelte";
    import Button from "../../components/Button.svelte";
    import {currentPage} from './../../stores/navState'
    const greetingList = [
        "Howdy!",'...'
 ];
    let greeting = $state(
        greetingList[Math.floor(Math.random() * greetingList.length)],
    );
</script>

<div
    style="background-image: url('/img/hero-pattren.jpg'); background-repeat: repeat; background-size: 500px;"
    class="p-[12rem]"
>
    <div class="hero backdrop-blur-md rounded-2xl p-12">
        <div class="headline">
            <h1
                class="text-[4rem] bg-gradient-to-tr from-[#ae00ff] to-[#d900ff] bg-clip-text text-transparent font-bold mb-6"
            >
                {greeting}
            </h1>
        </div>
        <br />
        <div class="cont grid grid-cols-2">
            <div>
                <div class="text-[3rem] font-light">
                    I am Burhan.<br />
                    I love computers.<br />
                    I Like to Design<br />
                    I Like to Program<br />
                    I Use Arch BTW <br />
                    <Button onclick ={()=> currentPage.set('WhatIDo')} variant="trablur" size="lg">See My Work -></Button>
                </div>
            </div>
            <Slider
                items={[
                    "https://placehold.co/200x400",
                    "https://placehold.co/200x400",
                    "https://placehold.co/200x400",
                ]}
            ></Slider>
        </div>
    </div>
    <div class="text-center mt-20">
        <div class="scroll-down inline-block">
            <svg
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </div>
        <p class="mt-2">Scroll</p>
    </div>
</div>
<div
    class="w-full h-[100vh] p-[5rem] bg-[#260138] flex items-center justify-center">
    <div class="grid grid-cols-3 text-[3rem] font-light">
        <div class="flex flex-col p-[3rem]">
            <span>Litrature<br></span>
            <Slider items = {["https://placehold.co/200x400"]}></Slider>
            <div class=""><Button onclick={()=>currentPage.set('')} variant='primary'>Read Blog -></Button></div>
        </div>
        <div class="flex flex-col p-[3rem]">
            <span>Programming/ Dev<br></span>
            <Slider items = {["https://placehold.co/200x400"]}></Slider>
            <div class=""><Button onclick={()=>currentPage.set('')} variant='primary'>View Projects -></Button></div>
        </div>
        <div class="flex flex-col p-[3rem]">
            <span>Design</span>
            <Slider items={["https://placehold.co/200x400"]}></Slider>
            <div class=""><Button onclick={()=>currentPage.set('')} variant='primary'>View -></Button></div>
        </div>
    </div>
</div>
 -->

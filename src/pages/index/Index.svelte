<script>
    // @ts-ignore
    import "./Index.css";
    import Slider from "../../components/Slider.svelte";
    import Button from "../../components/Button.svelte";
    import {currentPage} from './../../stores/navState'
    const greetingList = [
        "Howdy!",
        "Aloha!",
        "Bonjour!",
        "Hey There!",
        "What's cookin'?",
        "Greetings!",
        "Salutations!",
        "Yo, yo, yo!",
        "How's it hangin'?",
        "What's shakin'?",
        "Ahoy!",
        "Howdy-doo!",
        "Cheers!",
        "Top of the morning to ya!",
        "Hello!",
        "Hiya!",
        "What's the buzz?",
        "Salute, amigo!",
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
            <!-- TODO add a design showcase grid page-->
        </div>
    </div>
</div>


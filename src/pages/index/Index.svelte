<script>
  // @ts-nocheck
  import "./Index.css";
  import Slider from "../../components/Slider.svelte";
  import Button from "../../components/Button.svelte";
  import LatestThuweets from "../../components/LatestThuweets.svelte";
  import { router } from './../../router/router';
  const { navigate } = router;
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
  class="bg-[url('/img/hero-pattren.webp')] h-[100vh] bg-repeat bg-[length:500px] p-5 md:p-[12rem] flex justify-center items-center flex-col"
>
  <div class="hero backdrop-blur-md rounded-2xl p-6 mt-[35%] lg:mt-[10%] md:mt-[30%] md:p-8 ">
    
    <div class="cont grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="space-y-4 text-2xl lg:text-3xl font-light">
        <div class="headline mb-6">
          <h1
            class="text-4xl md:text-[4rem] bg-gradient-to-t from-[#6cffd0] to-[#ffffff] bg-clip-text text-transparent font-extrabold font-sans">
            {greeting}
          </h1>
        </div>
        <p>I am <b class="text-[#6cffd0]">Burhan</b></p>
        <p>I love <b class="text-[#6cffd0]">computers</b></p>
        <p>I like to <b class="text-[#6cffd0]">design</b></p>
        <p>I like to <b class="text-[#6cffd0]">program</b></p>
        <p>I Like <b class="text-[#6cffd0]">Linux </b></p>
        <Button
          onclick={() => navigate('whatido')}
          variant="trablur"
          size="lg"
        >
          See My Work &rarr;
        </Button>
      </div>

      <!-- Hide slider on mobile -->
      <div class="hidden w-80 lg:block">
        <Slider
          fit={true}
          items={[
            "/img/Design/Poster_Winner.webp",
            "/img/App Dev/HomeChef/logo1.png",
            "/img/blogThumbs/1.webp",
          ]}
        />
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="text-center mt-8 block md:hidden md:mt-20">
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

<!-- Thuweets Section -->
<LatestThuweets/>
<!-- Showcase Section -->
<div
  class="w-full min-h-screen p-8 md:p-[5rem] bg-[#260138] flex items-start justify-center"
>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-2xl md:text-4xl font-light"
  >
    <!-- Literature -->
    <div class="flex flex-col space-y-4">
      <span>Literature</span>
      <div class="">
        <Slider items={["/img/blogThumbs/1.webp"]} />
      </div>
      <Button onclick={() => navigate('blog')} variant="primary">
        Read Blog &rarr;
      </Button>
    </div>

    <!-- Programming / Dev -->
    <div class="flex flex-col space-y-4">
      <span>Programming / Dev</span>
      <div class="">
        <Slider
          items={[
            "/img/App Dev/HomeChef/logo1.png",
            "/img/App Dev/travelPartner/logo1.webp",
          ]}
        />
      </div>
      <Button onclick={() => navigate('whatido')} variant="primary">
        View Projects &rarr;
      </Button>
    </div>

    <!-- Design -->
    <div class="flex flex-col space-y-4">
      <span>Design</span>
      <div class="">
        <Slider
          items={[
            "img/Design/playingCard.webp",
            "img/Design/fearless_gun_thumb.webp",
            "img/Design/electric_gun_thumb.webp",
          ]}
        />
      </div>
      <Button onclick={() => navigate("design")} variant="primary">
        View &rarr;
      </Button>
    </div>
  </div>
</div>

<script>
  // @ts-nocheck
  import "./Index.css";
  import Slider from "../../components/Slider.svelte";
  import Button from "../../components/Button.svelte";
  import LatestThuweets from "../../components/LatestThuweets.svelte";
  import { router } from "./../../router/router";
  import SocialButtons from "../../components/socialButtons.svelte";
  const { navigate } = router;
  const greetingList = [
    "Howdy!",
    "Aloha!",
    "Bonjour!",
    "Hey There!",
    "Greetings!",
    "Hello!",
    "Salute!",
    "أهلا وسهلا",
    "السلام عليكم",
    "سلام",
    "Ciao",
    "Selamat",
    "خوش آمدید",
  ];
  let socialMediaLinks = [
    { name: "Github", url: "https://github.com/burhanarif4211/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/that-burhan/" },
    { name: "Instagram", url: "https://www.instagram.com/iam.burhanarif" },
    { name: "Youtube", url: "https://youtube.com/@iam.burhan" },
    // { name: "CodePen",    url: "https://codepen.io/Recon-Master"},
  ];
  let greeting = greetingList[Math.floor(Math.random() * greetingList.length)];
</script>

<!-- Hero Section -->
<div
  class="bg-[url('/img/hero-pattren.webp')] min-h-screen bg-repeat bg-size-[800px] flex flex-col justify-center items-center relative overflow-hidden"
>
  <!-- Main Content Container - Centered Single Column -->
  <div class="w-full max-w-4xl mx-auto px-4 sm:px-10 lg:px-8 py-12 md:py-20">
    <!-- Glass Card Container -->
    <div
      class="hero backdrop-blur-sm md:backdrop-blur-none rounded-4xl p-6 md:p-8 lg:p-12"
    >
      <div class="text-center space-y-6 md:space-y-8">
        <!-- Greeting Headline -->
        <div class="headline">
          <h1
            class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-linear-to-t from-[#6cffd0] to-white bg-clip-text text-transparent font-extrabold font-sans leading-tight"
          >
            {greeting}
          </h1>
        </div>

        <!-- Description Lines -->
        <div
          class="space-y-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white"
        >
          <p>I am <b class="text-[#6cffd0]">Burhan</b></p>
          <p>I love <b class="text-[#6cffd0]">computers</b></p>
          <p>I like to <b class="text-[#6cffd0]">design</b></p>
          <p>I like to <b class="text-[#6cffd0]">program</b></p>
          <p>I Like <b class="text-[#6cffd0]">Linux</b></p>
        </div>

        <!-- Social Buttons -->
        <div class="flex justify-center">
          <SocialButtons {socialMediaLinks} />
        </div>

        <!-- Action Buttons (always visible, centered) -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Button
            Class="w-full sm:w-auto min-w-[200px] text-center"
            onclick={() => navigate("whatido")}
            variant="trablur"
            size="lg"
          >
            See My Work →
          </Button>
          <Button
            Class="w-full sm:w-auto min-w-[200px] text-center"
            onclick={() => navigate("cv")}
            variant="trablur"
            size="lg"
          >
            ← Resume/CV
          </Button>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator (visible on mobile/tablet, optional on desktop) -->
  <div class=" absolute bottom-8 left-0 right-0 text-center hidden md:block">
    <div class="scroll-down inline-block animate-bounce">
      <svg
        class="h-8 w-8 text-white"
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
    <p class="mt-2 uppercase tracking-wide text-sm text-white/80">Scroll</p>
  </div>
</div>
<!-- Showcase Section -->
<div
  class="w-full min-h-screen p-8 md:p-20 bg-[#260138] flex items-start justify-center"
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
      <Button onclick={() => navigate("blog")} variant="primary">
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
      <Button onclick={() => navigate("whatido")} variant="primary">
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
<!-- Thuweets Section -->
<div class="text-center mb-6">
  <p class="text-sm max-w-3xl mx-auto mt-10">
    Kinda cringe don't read.
  </p>
</div>
<LatestThuweets />

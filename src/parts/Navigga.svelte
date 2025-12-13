<script>
  import { onMount, onDestroy } from "svelte";
  import { router } from "./../router/router.js";
  let menuOpen = false;
  let lastScrollY = 0;
  let visible = true;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      visible = false;
    } else {
      visible = true;
    }
    lastScrollY = currentScrollY;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });
  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  const { navigate } = router;
</script>

<nav
  id="navbar"
  class="fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out"
  class:translate-y-0={visible}
  class:-translate-y-full={!visible}
>
  <div
    class="sm:w-full w-[80px] backdrop-blur-lg shadow-md rounded-b-full px-6 py-3 flex items-center justify-between"
  >
    <div class="text-xl font-bold"></div>
    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-8">
      <li
        onclick={() => {
          menuOpen = !menuOpen
          navigate("home");
        }}
        class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
      >
        <!-- svelte-ignore a11y_missing_attribute -->
        <a class="text-lg font-medium flex items-center">
          <span class="mr-2 text-shadow-none">👤</span> about
        </a>
      </li>
      <li
        onclick={() =>{ navigate("whatido")
          menuOpen = !menuOpen
        }}
        class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
      >
        <a class="text-lg font-medium flex items-center">
          <span class="mr-2 text-shadow-none">💼</span> what i do
        </a>
      </li>
      <li
        onclick={() => {navigate("blog")
          menuOpen = !menuOpen
        }}
        class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
      >
        <a class="text-lg font-medium flex items-center">
          <span class="mr-2 text-shadow-none">📝</span> blog
        </a>
      </li>
    </ul>
    <!-- Mobile Hamburger -->
    <button
      class="md:hidden focus:outline-none items-center"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {#if menuOpen}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        {:else}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div class="md:hidden backdrop-blur-lg shadow-inner rounded-2xl">
      <ul class="flex flex-col space-y-2 p-4">
        <li
          onclick={() => navigate("home")}
          class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
        >
          <a
            class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg"
          >
            <span class="mr-2 text-shadow-none">👤</span> about
          </a>
        </li>
        <li
          onclick={() => navigate("whatido")}
          class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
        >
          <a
            class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg"
          >
            <span class="mr-2 text-shadow-none">💼</span> what i do
          </a>
        </li>
        <li
          onclick={() => navigate("blog")}
          class="cursor-pointer bg-[#c756ff19] rounded-full px-4 py-2"
        >
          <a
            class="text-lg font-medium flex items-center text-shadow-[#0000005a] text-shadow-lg"
          >
            <span class="mr-2 text-shadow-none">📝</span> blog
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>

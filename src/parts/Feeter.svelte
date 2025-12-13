<script>
    // @ts-nocheck
    import PopUpHeading from "./../components/PopUpHeading.svelte";
    let socialMediaLinks = [
      { name: "Github",     url: "https://github.com/burhanarif4211/"},
      { name: "LinkedIn",   url: "https://www.linkedin.com/in/that-burhan/"},
      { name: "Instagram",  url: "https://www.instagram.com/iam.burhanarif"},
      { name: "Youtube",    url: "https://youtube.com/@iam.burhan"},
      // { name: "CodePen",    url: "https://codepen.io/Recon-Master"},
    ];
</script>

<footer class="w-full bg-gradient-to-t from-[#6c01a6] to-[#250138] overflow-hidden py-8 md:py-16">
    <!-- Social Links -->
    <ul class="flex flex-wrap justify-center items-center gap-6 md:gap-12">
      {#each socialMediaLinks as link, i (i)}
        <li class="flex-shrink-0 text-lg md:text-2xl">
          <a target="_blank" rel="noopener noreferrer" href={link.url}>
            <PopUpHeading
              text={link.name}
              ydirection="100"
              xtweak="-3%"
              delay={50 * i}
            />
          </a>
        </li>
      {/each}
    </ul>
  
    <!-- Copyright -->
    <div class="mt-6 text-center text-sm md:text-base">
      &copy; {new Date().getFullYear()} All Rights Reserved. Burhan Arif
    </div>
  </footer>


<!-- VerticalMenuBar.svelte -->
<script>
  import { onMount } from "svelte";

  let isAnimating = false;

  // Function to toggle the animation state when the navigation__toggle is clicked
  function toggleAnimation() {
    isAnimating = !isAnimating;
  }

  // You can also use onMount() to start the animation automatically when the component is mounted
  onMount(() => {
    setTimeout(() => {
      isAnimating = false;
    }, 500); // Add a delay if you want the animation to start after a certain time
  });
</script>

<head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  /></head
>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class="material-symbols-outlined toggleMenu"
  on:click={() => toggleAnimation()}>menu</span
>
<nav class="horizantal-menu-bar" class:toggleMenuShow={isAnimating}>
  <li><a href="/">Home</a></li>
  <li><a href="/SelectionMenu">Sections</a></li>
  <li><a href="/en/About">About</a></li>
  <li><a href="/en/Contacts">Contact</a></li>
  <li><a href="/en/Profile">Profile</a></li>
</nav>

<style>
    *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .horizantal-menu-bar {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    z-index: 0;
    text-decoration: none;
    background: rgb(0, 58, 138);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    @media (max-width: 516px) {
      height: 100vh;
      width: 80px;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      font-size: 20px;
    }
  }
  li {
    display: block;
    padding: 20px;
    cursor: pointer;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }
  .toggleMenu {
    position: absolute;
    cursor: pointer;
    position: fixed;
    color: #ccc;
    top: 2vh;
    left: 2.5vw;
    font-size: 30px;
    user-select: none;
    opacity: 0.8;
    z-index: 2;
  }
  @media (min-width: 516px) {
    .toggleMenu {
      display: none;
    }
  }

  .toggleMenuShow {
    transform: translateY(0);
  }
  @media (max-width: 516px) {
    .horizantal-menu-bar {
      flex-direction: column;
      width: 100px;
    }

    li {
      margin-top: 7.5vh;
      padding: 5px; 
    }
  }
</style>

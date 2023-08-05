
<script>
 import { onMount } from 'svelte';
  import AnimeHeading from '../AnimeXHeading.svelte';
  import ImgFrame from '../ImgFrame.svelte';


let isAnimating = false;

// Function to toggle the animation state when the navigation__toggle is clicked
function toggleAnimation() {
  isAnimating = !isAnimating;
  setTimeout(() => {
    isAnimating = false;
  }, 8000);
}
// // You can also use onMount() to start the animation automatically when the component is mounted
// onMount(() => {
//   setTimeout(() => {
//     isAnimating = true;
//   }, 500); // Add a delay if you want the animation to start after a certain time
// });
// onMount(()=>{
//     setTimeout(() => {
//     isAnimating = false;
//   }, 1000);
// });

</script>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<div class="page">
<div class="background"></div>

<div class="content__container">
  <div class:animate="{isAnimating}" class="content content--home">
    <div class="innerContent">
    <div class="header"><AnimeHeading text="Here, You will find All my Graphic Design Work in the past." xdirection="200" xtweak="5%"/></div>
    <div class="scrolldown"><span class="material-symbols-outlined scr">expand_more</span>Check It Out<span class="material-symbols-outlined scr">expand_more</span></div>
  </div>
  <div class:animate="{isAnimating}" class="content content--home">
    <div class="innerContent">
    <div class="frame_container"><ImgFrame URL="/src/lib/Thumb1Before.jpg"/></div>
    </div>
  </div>
</div>
</div>
<div class="navigation">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="material-symbols-outlined toggleMenu" on:click={() => toggleAnimation()} >menu</span>
  <ul>
    <li><a class="navigation__link" href="/">Home</a></li>
    <li><a class="navigation__link" href="/">Project 1</a></li>
    <li><a class="navigation__link" href="/">Project 2</a></li>
    <li><a class="navigation__link" href="/">Project 3</a></li>
    <li><a class="navigation__link" href="/SelectionMenu">Sections</a></li>
    <li><a class="navigation__link" href="/en/Contacts">Contact</a></li>

  </ul>
</div>
</body>
<style>

body {
  color: #FFF;
  background-color:black;
  font-family: 'lato', sans-serif;
  font-size: clamp(48px, 4vw, 100px);
  overflow-x: hidden;
  background-image: url('https://st.depositphotos.com/1005844/57600/i/450/depositphotos_576004278-stock-photo-illustration-tileable-stars-night-sky.jpg');

}

  .navigation {
    top: 0;
    left: 0;

  }

  .toggleMenu{
      position: absolute;
      cursor: pointer;
      position: fixed;
      top: 50px;
      left: 40px;
      font-size: 40px;
      user-select: none;
      opacity: 0.8;
      z-index: 2;
      
  }
  .toggleMenu:hover{
      opacity: 1;
  }
  .navigation ul {
    display: block;

    top: 60px;
    position: fixed;
    font-size: 5vw;
  }

  .navigation li {
    display: block;
    z-index: 0;

  }

  .navigation__link {

    color: white;
    opacity: 0.8;
    font-size: 30px;
    line-height: 3.5em;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity 500ms ease;

  }

  .navigation__link:hover {
      opacity: 1;
  }

.content__container {
  transform-style: preserve-3d;
  perspective: 1000px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;

}
.content {
  position: relative;
  height: 100vh;
  z-index: 1;
  padding: 3vw;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  background-color: #1E083B;
  border-radius: 10px;
  /* display: flex;
  flex-direction: column; */
  transform: translateX(0px) translateZ(0px);
  transition: transform 0.3s ease;
  
  }
  .content.animate {
      transform: translateX(150px) translateZ(-200px) rotateY(-10deg);
      pointer-events: none;
    }
    .innerContent{
     margin: 6rem;

    }

/* scrollable contant */
      .header {
        height: 50vh;
        font-size: clamp(30px, 4vw, 48px);
        margin: auto;
        /* margin-top:vh; */
        font-family: 'helvetica', sans-serif;
        color: white;
      }

    .scr{
        position: relative;
      font-size: larger;
      }
    .frame_container{
      aspect-ratio: 16/9;
      width: 50%;
      justify-content: right;
    }

</style>
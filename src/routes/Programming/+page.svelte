
<script>
 import { onMount } from 'svelte';
  import AnimeHeading from '../AnimeHeading.svelte';

let isAnimating = false;

// Function to toggle the animation state when the navigation__toggle is clicked
function toggleAnimation() {
  isAnimating = !isAnimating;
}



</script>
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<div class="page">
<div class="background"></div>
<div class="navigation">
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
<div class="content__container">
  <div class:animate="{isAnimating}" class="content content--home">
    <div class="text"><AnimeHeading text="Here, You will find my programmnig work from the past." xdirection="200"/></div>
  </div>
</div>
</div>

<style>
    
:root {
  color: #FFF;
  background-color:black;
  font-family: 'lato', sans-serif;
  overflow: hidden;
  background-image: url('https://st.depositphotos.com/1005844/57600/i/450/depositphotos_576004278-stock-photo-illustration-tileable-stars-night-sky.jpg');
}
.content__container {
  transform-style: preserve-3d;
  perspective: 1000px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.content {
  position: absolute;
  z-index: 1;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  background-color: #1E083B;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0px) translateZ(0px);
transition: transform 0.3s ease;

}
.content.animate {
    transform: translateX(150px) translateZ(-200px) rotateY(-10deg);
    
  }
.text {
  font-size: clamp(0.7rem, 8vw, 2rem);
  text-align: center;
  font-family: 'helvetica', sans-serif;
  color: white;
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
  position: fixed;
  top: 125px;
  position: relative;
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
  transition: opacity 125ms;

}

.navigation__link:hover {

    opacity: 1;
}
</style>
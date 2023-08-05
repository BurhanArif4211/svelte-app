<!-- NAV-BAR -->
<script>
  let menuSlideDown = false;
let linksIn =false;
  // Function to toggle the animation state when the toggleMenu is clicked
  function toggleSlide() {
    menuSlideDown = !menuSlideDown;
    linksIn = !linksIn;
  }
</script>

<head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/></head>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class="material-symbols-outlined toggleMenu"
  on:click={() => toggleSlide()}>menu</span
>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<nav on:click={()=>toggleSlide()} class="horizantal-menu-bar" class:toggleMenuShow={menuSlideDown} class:linksFadeIn={linksIn} >
  <li><div class="login-button"><a href="/en/Login">Login</a></div></li>
  <li><a href="/">HOME</a></li>
  <li><a href="/SelectionMenu">SECTIONS</a></li>
  <li><a href="/en/About">ABOUT</a></li>
  <li><a href="/en/Contacts">CONTACTS</a></li>
  <li><a href="/en/Profile">PROFILE</a></li>
</nav>

<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .horizantal-menu-bar {
    font-family: lato, sans-serif;
    font-size: 1.7vw;
    font-weight: bold;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw ;
    height: 80px;
    z-index: 0;
    text-decoration: none;
    background: rgb(0, 58, 138);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    @media (max-width: 775px) {
      transform: translateY(-200%);
      transition: transform 1s ease;
    }
  }
  .login-button {
    position: fixed;
    top: 4rem;
    right: 2rem;
    background: none;
    color: #fff;
    padding: 10px 20px;
    border: solid #ccc;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
  }
  .login-button:hover {
    background-color: #ccc;
    color: #1e083b;
  }
  li {
    display: block;
    padding: 15px;
    cursor: pointer;
    font-size: 1.7vw;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }a:hover{color: #1e083b;}
  .linksFadeIn{
    opacity:100%;
  }
  .toggleMenuShow {
    transform: translateY(0);
  }
  @media (min-width: 775px) {
    /* for Desktop sites */
    .toggleMenu {
      display: none;
    }
    .login-button {
      top: 0.8rem;
      padding: 10px;
      size: 15px;
    }
  }
  @media (max-width: 775px) {
      /* for Mobile sites */
    .horizantal-menu-bar {
      flex-direction: column;
      width: 100vw;
      height: 100vh;
     
    }
    li {
      margin-top: 1.5vh;
      padding: 5px;
      font-size: 10vw;
      margin: auto;
      margin-top: -15px;
    }
    .login-button{
      padding: 0.5rem;
      font-size: 24px;
    }
    .toggleMenu{
      position: relative;
    cursor: pointer;
    position: fixed;
    color: #ccc;
    top: 2vh;
    right: 2.5rem;
    font-size: 30px;
    user-select: none;
    opacity: 0.8;
    z-index: 2;

    }
  }
</style>

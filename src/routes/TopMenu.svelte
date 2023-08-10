<!-- NAV-BAR -->
<script>
  import { auth } from '$lib/firebase';
  import { signOut } from 'firebase/auth';
  import { authUser } from '$lib/authStore';
  let menuSlideDown = false;
let linksIn =false;
  // Function to toggle the animation state when the toggleMenu is clicked
  function toggleSlide() {
    menuSlideDown = !menuSlideDown;
    linksIn = !linksIn;
  }
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        $authUser = undefined;
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={()=>toggleSlide()} class="horizantal-menu-bar" class:toggleMenuShow={menuSlideDown} class:linksFadeIn={linksIn}>
{#if $authUser==undefined}<div class="login-button"><a href="/en/Login">Login</a></div>{:else}<div class="login-button"><a on:click={handleLogout} href="/en/Login">LogOut</a></div>{/if}
<nav >
  <ul>
  <li><a href="/">HOME</a></li>
  <li><a href="/SelectionMenu">SECTIONS</a></li>
  <li><a href="/en/About">ABOUT</a></li>
  <li><a href="/en/Contacts">CONTACTS</a></li>
  <li><a href="/en/Profile">PROFILE</a></li>
</ul>
</nav>

</div>
<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .horizantal-menu-bar {
    font-family: lato, sans-serif;
    font-size: clamp(2rem, 2.16vw, 4.5rem);
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw ;
    height: 80px;
    z-index: 2;
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
  ul{
    display: flex;
    flex-direction: row;
  }
  .login-button {
    position: fixed;
    top: 1.50vh;
    background: none;
    color: #fff;
    font-size: clamp(16px, 2.16vw, 40px);
    padding: 10px 10px;
    border: solid #ccc;
    border-radius: 100px;
    cursor: pointer;
    z-index: 3;
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
      right: 3rem;
      top: 0.8rem;
      padding: 10px;
      size: 15px;
    font-size: min(25px, 4.16vh);

    }
  }
  @media (max-width: 775px) {
      /* for Mobile sites */
    .horizantal-menu-bar {
      flex-direction: column;
      width: 100vw;
      height: 100vh;
     
    }
    ul{
      margin-top: 10.16vh;
      flex-direction: column;
    }
    li {
      padding: 5px;
      font-size: 10vw;
      margin-top: 3.5vh;
    }
    li a{
     display: block;
     text-align: center;
    }
    .login-button{
      position: absolute;
      margin: 80px 50%;
    font-size: clamp(20px, 3.16vw, 40px);
      transform: translate(-50%,-50%);
      top: max(65vh,30vw);
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
    z-index: 4;

    }
  }
</style>

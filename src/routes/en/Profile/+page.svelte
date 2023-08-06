<script>
    import AnimeXHeading from "../../AnimeXHeading.svelte";
    import {authUser} from "$lib/authStore"
    let user ={...$authUser}


  </script>
  <body>
  <h1 class="header"><AnimeXHeading text="Profile" xdirection="-200"/></h1>
  {#if $authUser}
  <div>
   {#if user.profileIMG!=="N/A"} <img alt="profileImage" src="{user.profileIMG}">{/if}
    <div class="displayName"><AnimeXHeading text= "Welcome, {$authUser.displayName}!" xdirection="-200" xtweak="3%" xdelay="300"/></div>
    <div class="uid"><AnimeXHeading text= "ID: {user.uid}" xdirection="-200" xtweak="3%" xdelay="600"/></div>
    <div class="email"><AnimeXHeading text= "Your Current Email: {user.email}" xdirection="-200" xtweak="3%" xdelay="900"/></div>

  </div>
{:else}
  <p class="header" >Please sign in First</p>
{/if}

  </body>
  <style>
        *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: Helvetica, sans-serif;
      color: #ccc;
    }
  
      body{
          height: 100vh;
          border-radius: 1vh;
          background-color: #1e083b;
          padding: 4vh;
      }
      .header{
          margin-top: 3.5vh;
          font-size: clamp(2rem, 8vw, 5rem);
          
      }
      .displayName, .uid, .email{
font-size: 3rem;
      }
  </style>
<script>
    import AnimeXHeading from "../../AnimeXHeading.svelte";
  
  </script>
  <body>
  <h1 class="header"><AnimeXHeading text="Profile" xdirection="-200"/></h1>
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
  </style>
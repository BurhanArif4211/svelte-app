<script>
  import AnimeHeading from "./AnimeHeading.svelte";
  import AnimePara from "./AnimePara.svelte";
  import TopMenu from "./TopMenu.svelte";
  
  
</script>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Buthan Arif | Home</title>
</head>

<main>
  <body>
    <div class="document">
      <div class="intro-wrapper">
        <div class="container">
          <div class="left-div">
            <AnimeHeading text="Graphic Design, Web Dev, Programming Be Realistic. " xdirection="300" xtweak="-5%"/>
            <button class="explore"
            ><a href="/SelectionMenu">Explore!</a></button
            >
          </div>
          <div class="right-div">
            <div class="circle" />
          </div>
        </div>
      </div>
      <div class="info"> 
        <div class="left"><div class="heading"> <AnimeHeading text="Hi" xdirection="200" xtweak="-20%"/></div></div>
        <div class="right">
          <a id="link" class="iamburhan jingle" href="https://instagram.com/iam.burhanarif" target="_blank"><img class="instalogo" src="https://img.freepik.com/free-icon/instagram_318-183413.jpg"><AnimePara text="@Iam.BurhanArif" ydirection="200"/></a>
          <div class="decsription-right" />
        </div>
      </div>
      <div class="info">
        <div class="left">
          <div class="heading"><AnimeHeading text="How May I Be Of Your Help?" xdirection="200" xtweak="-20%"/></div>
        </div>
        <div class="right"><div class="contact"><AnimeHeading text="Contact | Email | Company Name" xdirection="-100" xtweak="-20%"/></div></div>
      </div>
    </div>
  </body>
  <footer>
    Built with love in SvelteKit
  </footer>
</main>
<TopMenu />

<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .info {
    font-family: lato, sans-serif;
    font-size: 3rem;
    color: #ccc;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: #1e083b;
    padding: 2.5vw;
    margin: auto;
  }
  .left{
    flex: 1;
    padding: 30px;
    background-color: #1e083b00;
    width: min(100vw, 70%);
  }
  .right{
    flex: 1;
    padding: 20px;
    font-size: 10vh;
    width: min(100vw, 70%);
    background-color: #1e083b00;
    display: flex;
  }
  .heading{
    font-weight: bolder;
    font-size: clamp(2rem, 8vw, 10rem);
    padding: 10%;
  
  }
  .iamburhan{
    all: unset;
    cursor: pointer;

    font-size: clamp(2rem, 8vw, 10rem);
    margin-top: 50%;
    right: 10%;
  }
  .instalogo{
    aspect-ratio: 1/1;
    width: clamp(1.4vw,220px,10vw);
    position: absolute;
    margin-left:clamp(-13vw,500px,-10vw);

  }
.contact{
  margin-top:5%;
  position: absolute;
  font-size: clamp(1rem, 8vw, 5rem);
}

  .document {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color: hsl(266, 76%, 10%);
    position: absolute;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  p {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: min(3.5vw , 5rem);
    color: #ccc;
  }
  .intro-wrapper {
    margin-top: 15vh;
    margin-bottom: 15vh;
    height: 100vh;
  }
  .explore {
    font-size: 2vw;
    background-color: #cccccc00;
    border: solid 3px #cccccc;
    padding: 0.5rem;
    position: relative;
    top: min(2.5vh,5rem);
    left: 0.5vw;
    cursor: pointer;
  }
  .explore:hover {
    background-color: #ccc;
    color: #1e083b;
  }
  a {
    text-decoration: none;
    color: #ccc;
  }
 .explore a:hover {
    color: #1e083b;
  }
  .container {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    width: min(1500px, 70%);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    border-radius: 3vw;
    margin: auto;
    @media (min-width: 775px) {
      width: min(1500px, 100%);
    }
  }
  .left-div {
    flex: 1;
    padding: 30px;
    background-color: #1e083b00;
    font-size: min(3.5vw , 5rem);
    color: #ccc;
    width: min(100vw, 70%);
  }

  .right-div {
    flex: 1;
    padding: 20px;
    width: min(100vw, 70%);
    background-color: #1e083b00;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .circle {
    width:500px ;
    height: 500px;
    border-radius: 50%;
    background: rgb(116, 87, 193);
    background: linear-gradient(
      90deg,
      rgba(116, 87, 193, 1) 0%,
      rgba(0, 58, 138, 1) 91%
    );
  }

</style>

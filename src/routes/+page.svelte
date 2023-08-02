<script>
  import AnimeHeading from "./AnimeHeading.svelte";
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
            <p>Quality Expiriences At your Fingertips.</p>
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
        <div class="left"><div class="heading"> <AnimeHeading text="Hi"/></div></div>
        <div class="right">
          <a id="link" class="iamburhan jingle" href="https://instagram.com/iam.burhanarif" target="_blank">@iam.BurhanArif</a>
          <div class="decsription-right" />
        </div>
      </div>
      <div class="info">
        <div class="left">
          <div class="heading"><AnimeHeading text="How May I Be Of Your Help?"/></div>
        </div>
        <div class="right"><AnimeHeading text="Contact | Email | Company Name " /></div>
      </div>
    </div>
  </body>
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
    border-radius: 3.5vw;
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
    font-size: 10vh;
  }
  .iamburhan{
    all: unset;
    font-size: 18vh;
    font-size: clamp(2rem, 8vw, 10rem);
    margin-top: 30%;
  }
  
  .document {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color: hsl(266, 76%, 10%);
    position: absolute;
    overflow-x: hidden;
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
  a:hover {
    color: #1e083b;
  }
  .container {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    width: min(700px, 70%);
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
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: rgb(116, 87, 193);
    background: linear-gradient(
      90deg,
      rgba(116, 87, 193, 1) 0%,
      rgba(0, 58, 138, 1) 91%
    );
  }

</style>

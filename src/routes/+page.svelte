<script>
import AnimeStaggerPara from "./AnimeStaggerPara.svelte";
import AnimeHeading from "./AnimeXHeading.svelte";
  import AnimePara from "./AnimeYHeading.svelte";
  import TopMenu from "./TopMenu.svelte";
  import ContactForm from "./en/Contacts/ContactForm.svelte";
  
  
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
            <div class="header-text">
            <AnimeStaggerPara text="Graphic Design | Web Dev | Programming | Be Realistic" ydistance="300" xtweak="-5%"/>
            </div>
            <button class="explore">
              <a href="/SelectionMenu">Explore!</a>
            </button>
          </div>
          <div class="right-div">
            <div class="circle" />
          </div>
        </div>
      </div>
      <div class="info"> 
        <div class="left"><div class="heading"> <AnimeHeading text="Hi" xdirection="200" xtweak="-20%"/></div></div>
        <div class="right">
          <a id="link" class="iamburhan jingle" href="https://instagram.com/iam.burhanarif" target="_blank"><img class="instalogo" alt="instagram logo" src="https://img.freepik.com/free-icon/instagram_318-183413.jpg"><AnimePara text="@Iam.BurhanArif" ydirection="200"/></a>
          <div class="decsription-right" />
        </div>
      </div>
      <div class="info">
        <div class="left">
          <div class="heading"><AnimeHeading text="How May I Be Of Your Help?" xdirection="200" xtweak="-20%"/></div>
        </div>
        <div class="right"><div class="contact"><AnimeStaggerPara text="Contact Me | Any Time | Anywhere | Email"/><ContactForm /></div></div>
      </div>
    </div>
  </body>
  <footer>
    Built with love in Karachi, Pakistan
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

  .document {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color: hsl(266, 76%, 10%);
    position: absolute;
    overflow-x: hidden;
    width: 100%;

  }
  .header-text{
    font-size: clamp(2rem, 8vw, 5rem);

  }
  .placeholderheadertext{
    color: transparent;
  }

  .explore {
    font-size: 2vw;
    background-color: #cccccc00;
    border-radius: 5rem;
    border: solid 3px #cccccc;
    padding: 0.5rem;
    position: relative;
    top: 1rem;
    left: 0.5rem;
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
    margin-top: 15vh;
    @media (min-width: 775px) {
      width: min(1500px, 100%);
    }
  }
  .left-div {
    flex: 1;
    padding: 30px;
    font-size: clamp(1rem, 8vw, 6rem);

    background-color: #1e083b00;
    
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
  display: flex;
  flex-direction: row;
}
</style>
<script>
  import TopMenu from "./TopMenu.svelte";
  
  import AnimeStaggerPara from "./AnimeStaggerYPara.svelte";
  import AnimeStaggerXPara from "./AnimeStaggerXPara.svelte";
  import AnimeXHeading from "./AnimeXHeading.svelte";

  import ContactForm from "./en/Contacts/ContactForm.svelte";
  import Footer from "./Footer.svelte";
  import Separate from "./Separate.svelte";

</script>


<main>
  <body>
    <div class="document">
      <div class="intro-wrapper">
        <div class="container">
          <div class="left-div">
            <div class="header-text">
              <AnimeStaggerPara text="Graphic | Design | Web Dev | Programming | Be Realistic" ydistance="200" xtweak="-5%"/>
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
      
      <Separate/>
      <div class="info1">
        <div class="c1">
          <div class="heading"><AnimeXHeading text="Hi" xdirection="200" /> </div>
        </div>
        <div class="c1"><img class="instalogo" alt="instagram logo" src="https://img.freepik.com/free-icon/instagram_318-183413.jpg" />
            <div class="handle"><AnimeStaggerXPara text=" @|I|a|m|.|B|u|r|h|a|n|A|r|i|f" xdistance="200" xtweak="20%" delay="100" />
        </div>
      </div>
    </div>
    <div class= "info2">
      <div class="c2">
        <div class="heading"><AnimeStaggerXPara text="How | May | I | Be | Of | Your | Help?" xdistance="300"  xtweak="20%"/></div>
      </div>
      <div class="c2">
        <div class="discription contact">
          <AnimeStaggerPara text="Contact | With | Email" /> <div class="contact"><ContactForm /></div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
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
  .info1  {
  position: relative;
  font-family: lato, sans-serif;
  font-size: clamp(1rem, 4vw, 8rem);
  color: #ccc;
  width: 100vw;
  background-color: #1e083b;
    height:100vh;
}
  .info2{
    height:100vh;

  }
.c1 {
  padding: 3.3vh;
  position: relative;
display:flex;
@media (min-width:775px) {
   display: flex;}
  flex-direction:row;
  font-size: clamp(1rem, 4vw, 8rem);
  margin-left: 3.4vh;
}
.c2{
  padding: 3.3vh;
  display:flex;
  @media (max-width:775px) {
    flex-direction:row ;
  }
}
.heading {
  font-weight: bolder;
  font-size: clamp(2rem, 8vw, 10rem);
}
  .discription{
    @media (min-width:775px) {
     position: absolute;
     padding: 50px;
   right: 100px;
  }
  font-weight: light;
  font-size: clamp(3rem, 6vw, 9rem);
  }
  .handle{
    z-index: 1;
  }
.instalogo{
  position: absolute;
  z-index: 0;
top: 0;
left: 0;
aspect-ratio: 1/1;
width: 110vw;
opacity: 0.3;
}

  .contact{

    @media (min-width:1030px) {
   display: flex;}
  }
  .document {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color:#1e083b ;
    position: relative;
    overflow: hidden;
    width: 100%;

  }
  .header-text{
    font-size: clamp(1rem, 8vw, 5rem);

  }

  .explore {
    font-size: clamp(0.5rem, 5vw, 2.5rem);
    background-color: #cccccc00;
    border-radius: 5rem;
    border: solid 3px #cccccc;
    padding: 0.8rem;
    position: relative;
    top: 1rem;
    left: 0.5rem;
    bottom:1vh ;    
    left: 0.5vw;
    cursor: pointer;
  }
  .explore:hover {
    background-color: #ccc;
    color: #1e083b;
  }
  a {
    all:unset;
    color: #ccc;
  }
  a:hover {
    color: #1e083b;
  }
  .intro-wrapper{
    height:85vh;
    width:100vw;
  }
  .container {
    display: flex;
    height: 75vh;
    width: min(700px, 70%);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    border-radius: 3vw;
    margin: auto;
    margin-top: 10.444vh;
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
    aspect-ratio: 1/1;
    height: 40vw;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(116, 87, 193, 1) 0%,
      rgba(0, 58, 138, 1) 91%
    );
  @media (max-width:775px) {
display: none;  
opacity: 0;  
  }
  }

  </style>
                                     
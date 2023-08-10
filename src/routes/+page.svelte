<script>
  import TopMenu from "./TopMenu.svelte";
  
  import AnimeStaggerYPara from "./AnimeStaggerYPara.svelte";
  import AnimeStaggerXPara from "./AnimeStaggerXPara.svelte";
  import AnimeXHeading from "./AnimeXHeading.svelte";

  import ContactForm from "./en/Contacts/ContactForm.svelte";
  import Footer from "./Footer.svelte";
  import Separate from "./Separate.svelte";
  import AnimeAlternaor from "./AnimeAlternaor.svelte";

</script>


<main>
  <body>
    <div class="document">
      <div class="intro-wrapper">
        <div class="container">
          <div class="left-div">
            <div class="header-text">
              <AnimeStaggerYPara text="Graphic | Design | Web Dev | Programming | Be Realistic" ydistance="200" xtweak="5%" delay="100"/>
              <button class="explore">
                <a href="/SelectionMenu">Explore!</a>
              </button>
            </div>
          </div>
          <div class="right-div">
            <div class="circle" />
          </div>
        </div>
      </div>
      
      <Separate/>
      <div class="info1">
        <div class="c1">
          <div class="heading"><AnimeXHeading text="Hi" xdirection="200" xtweak="25%"/> </div>
        </div>
        <div class="c1">
          <img class="instalogo" alt="instagram logo" src="https://img.freepik.com/free-icon/instagram_318-183413.jpg" />
          <div class="heading handle"><AnimeStaggerXPara text=" @|I|a|m|.|B|u|r|h|a|n|A|r|i|f" xdistance="200" xtweak="15%" delay="100" /></div>
        
            <div class="discription tryingtobe">
             <AnimeAlternaor text=" | GraphicDesigner | WebDeveloper | Programmer" />
          </div>
        </div>
    </div>
    <div class= "info2">
      <div class="c2">
        <div class="heading"><AnimeStaggerXPara text="How | May | I | Be | Of | Your | Help?" xdistance="300"  xtweak="35%" delay="150"/></div>
      </div>
      <div class="c2">
        <div class="discription contact">
          <!-- <AnimeStaggerPara text="Contact | With | Email"  xtweak="-20%"/> --><div class="contact form"><ContactForm /></div> 
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
    z-index: 0;
    padding-top: 5.1vh;
  position: relative;
  font-family: lato, sans-serif;
  font-size: clamp(1rem, 4vw, 8rem);
  color: #ccc;
  width: 100vw;
  background-color: #1e083b;
    height:100vh;

  }
.c1 {
  padding: 3.3vh;
  position: relative;

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
     font-size: clamp(3rem, 6vw, 9rem);
     padding: 50px;
     top: 250px;
  }
  font-weight: bold;
  @media (max-width:775px) {
    padding: -1.7rem;
  font-size: clamp(3rem, 3.3vw, 8rem);}

  }
  .handle{
    z-index: 1;
  font-size: clamp(2rem, 4vw, 10rem);

  }
  .tryingtobe{
    @media (min-width:775px) {
  top: 6vw;
left: 30vw;
    }
  position: absolute;

  left: 4.33vw;
z-index: 1;  
}
.instalogo{
  position: absolute;
  z-index: 1;
top: 0;
left: -10;
aspect-ratio: 1/1;
width: clamp(100vw,110vw,300vw);
opacity: 0.3;
}

  .contact{
    @media (min-width:1030px) {
   display: flex;
  flex: 1;}
  }


  /*form                 */
  .document {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color:#1e083b ;
    position: relative;
    overflow: hidden;
    width: 100%;

  }
  .header-text{
    font-size: clamp(2rem, 5vw, 5rem);
    @media (max-height: 1040px) {
      font-size: clamp(2rem, 6vh, 5rem);
    }
    @media (max-width: 775px) {
      font-size: clamp(2rem, 4vw, 5rem);
    }
  }

  .explore {
    position: absolute;
    
    background: none;
    color: #fff;
    border: solid #ccc;
    padding: 5px 10px;
    border-radius: 100px;
    cursor: pointer;
    
    font-size: clamp(2.16vw, 2vh, 3rem);
    @media (min-width: 775px) {
    left: 60px;
    bottom: -10px;}
    @media (max-width: 775px) {
      padding: 10px 10px;
      bottom: 45px;

    }
  
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
    height:95vh;
    width:100vw;
  }
  .container {
    position: relative;
    display: flex;
    height: 50vh;
    width: min(700px, 70%);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    border-radius: 3vw;
    margin: auto;
    margin-top: max(10.444vh,10vw);
    padding: 3.16vh 0;
    @media (max-width: 775px) {
     padding: 0;
      height: min(50vh,44%);
    };
    @media (min-width: 775px) {
      width: min(1500px, 100%);

    }

  }
  .left-div {
    position:relative;
    height: 45vh;
    padding: 30px;
    bottom: 10px;
    background-color: #1e083b00;
    @media (max-width: 775px) {
      z-index: 0;
      margin-top: 20px;
    padding: 40px;
    }
  z-index: 2;
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
    width: 25vh;
    z-index: 1;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(116, 87, 193, 1) 0%,
      rgba(0, 58, 138, 1) 91%
    );
    animation: breath 6s ease-in-out infinite;
    @media (min-width: 775px) {
    width: 55vh;

    }
  @media (max-width:775px) {
display: none;  
opacity: 0;  
  }
  }
  @keyframes breath{
    0%, 50%, 100% { transform: scale(1, 1); }
  30%, 80% { transform: scale(0.92, 0.95); }
    
  }

  </style>
                                     
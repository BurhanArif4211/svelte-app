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
          <!-- <AnimeStaggerPara text="Contact | With | Email"  xtweak="-20%"/> --><div class="contact-form"><ContactForm /></div> 
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</main>
<TopMenu />
<style src="./home.css"></style>
                      
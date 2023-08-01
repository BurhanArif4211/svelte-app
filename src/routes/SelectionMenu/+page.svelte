<style>
    .box-container {
    font-family:  Helvetica, sans-serif;
    color: rgb(255, 255, 255);
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  
  }
  
  .link-box {
    flex: 1;
    background-size:cover;
    background-position: left ;
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;
    text-decoration: none;
    z-index: 0;
  }


  .inner-text{
    color: #ccc;
    font-size: 4vw;
    margin: auto;
  }
.inner-text:nth-child(1):hover {
   color: transparent;
  background-image: url('/src/lib/grapphicdesign.gif');

}
  .link-box:hover {
    transform: scale(1.1);
    
  }
  
  .link-box:nth-child(1) {
    background-image: url(/src/lib/panel1.jpg);
  }

  
  .link-box:nth-child(2) {
    background-image: url(/src/lib/panel3.jpg);
  }
  
</style>
<main>
    <div class="box-container">
        <a href="/GraphicDesign" class="link-box">
            <div class="inner-text">Graphic Design</div>
        </a>
        <a href="/Programming" class="link-box">
            <div class="inner-text">Programming</div>
        </a>
      </div>
  </main>
<script>
// @ts-nocheck

import AnimeYHeading from "./AnimeYHeading.svelte";

    let socialMediaLinks = [
      { name: 'Fiverr', url: 'https://www.fiverr.com/burhanarif276' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/burhan-arif-b41914237/' },
      {name: 'CodePen',url:'https://codepen.io/Recon-Master'},
      { name: 'Instagram', url: 'https://www.instagram.com/iam.burhanarif' },
      {name:'About',url:'/en/About'},
      {name:'Contact',url:'/en/Contact'}
    ];
  </script>
  <style>
.feet{
  background: linear-gradient(90deg, rgba(0, 58, 138, 1) 0%, rgba(116, 87, 193, 1) 100%);
  padding: 5vw;
  color: #ccc;
  font-size: clamp(0.5rem, 4vw, 6rem);
  overflow: hidden;
}
a{
  all: unset;

}
.links-cont{
  display: flex;
flex-wrap: wrap;
justify-content: center;
}
.links{
  cursor: pointer;
  flex-direction: row;
  padding: 7px;
  flex: 5%;
  padding: 10px;
}
ul{
  all: unset;
}
li{
  display: inline-block;
}

</style>
  <footer class="feet">
    <div class="links-cont">
      <ul>
      {#each socialMediaLinks as link ,i(i)}
       <li class="links"><a target="_blank" href="{link.url}"><AnimeYHeading text="{link.name}" ydirection="400" xtweak="-5%" delay="{300*i}"/></a></li>
      {/each}
    </ul>
  </div>
  </footer>
<script>
// @ts-nocheck

    let x = 0;
    export let URL ="https://clipground.com/images/image-placeholder-clipart-1.png"
    function handleMouseMove(event) {
      x = event.clientX;
    }
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="cont" on:mousemove={handleMouseMove}>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={URL} alt="placeholder image" style="width: 100%; height: 100%;" />
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="up" style="width: {x}px;"><img src="/src/lib/Thumb1After.jpg"></div>
  </div>
  <style>
    .up{
      aspect-ratio: 16/9;
      position: absolute; 
      background: white;
      display:flex;
      color:black;
      font-size:1rem;
      justify-items:center;
      overflow: hidden;
      height: 100%; 
      top: 0;
}
.cont{
      overflow: hidden;
      aspect-ratio: 16/9;
      position: relative; width: 100%; height: 100%;
      overflow-x:hidden;
      border-radius:30px;
    }
  </style>
  
  
  
  
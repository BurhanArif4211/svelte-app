<script>
    export let text=""
    let lines = text.split(' | ');

</script>




<div class="slider">
    <div class="container">
      <div class="slide x">{lines[1]}</div>
      <div class="slide y">{lines[2]}</div>
      <div class="slide z">{lines[3]}</div>
    </div>
  </div>



<style>
html, body {
	width: 100%;
	height: 100%;
	background: black;
	color: #fff;
	font-family: "lato", sans-serif;
	}

.slider {
	position: absolute;
	top: 30vh;
	bottom: 0;
	right: 0;
	left: 0;
	width: 300px;
	height: 200px;
 	margin: auto;
	-webkit-perspective: 600px;
	        perspective: 600px;
}

	.slider * {
		        transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
	}

	.container {
		width: inherit;
		height: inherit;
		transform-style: preserve-3d;
		transform: rotateY(0deg) ;
	}
		.slide, .slide:after, .slide:before {
			display: block;
			width: inherit;
			height: inherit;
			display:flex;
			  justify-content: center;

			position: absolute;
			-webkit-transform-style: preserve-3d;
			        transform-style: preserve-3d;
			background-size: cover;
			background-position: center;
		}

		.slide.x {
		          transform: rotateY(0deg);
			opacity:0;
			animation: opacityx 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2)
			
			
		} 
		.slide.y {opacity:0;
		          transform: rotateY(45deg);
			animation: opacityy 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2)
			
		} 
		.slide.z {opacity:0;
		          transform: rotateY(90deg);
			animation: opacityz 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2)
			
		} 

		.container {
			animation: rotate 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2)
			
		}

		@keyframes rotate {
			0%   {transform: rotateY(0deg);}
			25%, 40% {transform: rotateY(-45deg);}
			65%,80% {transform:rotateY(-90deg);}
			80%,100%{transform: rotateY(0deg);}
		}

	@keyframes opacityx {
		      0%   {opacity:0;}
			25%, 40% {opacity:0;}
			65%,80% {opacity:0;}
			80%{opacity:1;}
		     100%{opacity:0;}
}
	@keyframes opacityy {
		      0%   {opacity:0;}
			25%, 40% {opacity:1;}
			65%,80% {opacity:0;}
			90%,100%{opacity:0;}
}
	@keyframes opacityz {
		      0%   {opacity:0;}
			25%, 40% {opacity:0;}
			65%{opacity:1;}
            80% {opacity: 0;}
			90%,100%{opacity:01;}
}


</style>
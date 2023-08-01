<script>
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
      <div class="login-button"><a href="/en/Login">Login</a></div>
      <div class="container">
        <div class="left-div">
          <p>Quality Expiriences At your Fingertips.</p>
          <button class="explore"><a href="/SelectionMenu">Explore!</a></button>
        </div>
        <div class="right-div">
          <div class="circle" />
        </div>
      </div>
    </div>
    <div class="info">
      
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
  .document{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: hsl(266, 76%, 10%);
   position: absolute;
   width: 100vw;
   height: 100vh;
    overflow-x: hidden;
  }
  p {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 3.5vw;
    color: #ccc;
  }
  .intro-wrapper {
    margin-top: 15vh;
    width: 100vw;
    height: 100vh;
  }
  .explore {
    font-size: 2.5vw;
    color: #ccc;
    background-color: #cccccc00;
    border-radius: min(20px,20vw);
    border: solid #cccccc;
    padding: 15px;
    position: relative;
    top: 1rem;
    left: 0.5rem;
    cursor: pointer;
  }
  .explore:hover {
    background-color: #ccc;
    color: #1e083b;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }
  .container {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    width: min(700px, 70%);
    background: rgb(0, 58, 138);
    background: linear-gradient(
      90deg,
      rgba(0, 58, 138, 1) 0%,
      rgba(116, 87, 193, 1) 100%
    );
    border-radius: 3vw;
    margin: auto;
    @media (min-width: 1500px) {
      width: min(1500px, 100%);
    }
  }
  .login-button {
    position: fixed;
    top: 20px; 
    right: 0.5vw;
    background: none;
    color: #fff;
    padding: 10px 20px;
    border: solid #ccc;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;
  }
  .login-button:hover {
    background-color: #ccc;
    color: #1e083b;
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

  .info {

    width: 100vw;
    height: 100vh;
    background-color: #1e083b;
    border-radius: 3.5vw;
    padding: 2.5vw;
  }
</style>

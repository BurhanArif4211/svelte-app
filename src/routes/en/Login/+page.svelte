
<!-- src/routes/Login.svelte -->
<script>
import { signInWithEmail, signInWithGoogle } from "$lib/firebase";

let email = '';
let password = '';
function handleEmailSignIn() {
  signInWithEmail(email, password);
}
function signInWithGoogleL(){
  signInWithGoogle();
}

</script>
<main class="container">
    <h1 class="title">Login</h1>
    <form method="Post" action="" class="main">
      <label class="field">
        Email:
        <input autocomplete="email" bind:value={email} type="email" class="input" />
      </label>
      <label class="field">
        Password:
        <input name="password" autocomplete="current-password" required  bind:value={password} type="password" class="input" />
      </label>
      <button on:click={handleEmailSignIn} class="login-button" type="submit">Login</button>
      
      <a href="/en/Register"  >New User? Register Here</a>
    </form>
    <button class="google-button" on:click={signInWithGoogleL}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
          </g>
      </svg>
      Sign in with Google
  </button>
  </main>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      color: #ccc;
      background-color: #1e083b;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #ccc;
    }
  
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border-radius: 8px;
      background-color: hsl(266, 76%, 10%);
    }
  
    .field {
    
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  
    .input {
      color: #ccc;

      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 1.3vw;
      font-size: 1rem;
      width: 200px;
      background-color: transparent;
    }
  
    .google-button {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      color: #1e083b;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 20px;
      transition: background-color 0.2s ease;
    }

    .login-button {
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.2s ease;
    }
  
    .login-button:hover {
      background-color: #0056b3;
    }
    a{all: unset;
        color: #ccc;
      margin-top: 10px;
      }
        a:hover{
            color: white;
        }
  </style>
  
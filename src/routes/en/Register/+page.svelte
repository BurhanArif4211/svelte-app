
<!-- src/routes/Login.svelte -->
<script>
// @ts-nocheck
import { registerWithEmail, signInWithGoogle } from "$lib/firebase";
let email = '';
    let userName = '';
    let password2 = '';
    let password1 = '';

function createNewUser(){

  if (password1==password2 ||userName.length<12){
   registerWithEmail(userName,email,password1)
}else{
  console.log('invalid password')
}
}
    </script>
    <main class="container">
        <h1 class="title">Register</h1>
        <form method="get" on:submit={createNewUser} class="main">
          <label class="field">
            Enter User Name:
            <input autocomplete="username" bind:value={userName} type="username" class="input" />
          </label>
          <label class="field">
            Enter Valid Email:
            <input autocomplete="email" bind:value={email} type="username" class="input" />
          </label>
          <label class="field">
            Enter Password:
            <input name="password" autocomplete="current-password" required bind:value={password1} type="password" class="input" />
          </label>
          <label class="field">
            Re-Enter Password:
            <input name="password" autocomplete="current-password" required  bind:value={password2} type="password" class="input" />
          </label>
          <button on:click={console.log('submit')} class="login-button" type="submit">Register</button>
        </form>
        <button on:click={signInWithGoogle} class="google-button" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
              <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
              <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
              <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
            </g>
        </svg>
          Login with Google</button>
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
          color: #ccc;
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
      
        .login-button:hover {
          background-color: #0056b3;
        }
    
      </style>
      
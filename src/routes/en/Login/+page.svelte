<!-- src/routes/Login.svelte -->
<main class="container">
    <h1 class="title">Login</h1>
    <form method="POST" class="main">
      <label class="field">
        Email:
        <input type="email" class="input" />
      </label>
      <label class="field">
        Password:
        <input type="password" class="input" />
      </label>
      <button class="login-button" type="submit">Login</button>
    </form>
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
  
    .login-button:hover {
      background-color: #0056b3;
    }
  </style>
  
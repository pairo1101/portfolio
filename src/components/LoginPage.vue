<template>
  <div class="d-flex justify-content-center align-items-center vh-100 fantasy-background">
    <div class="card p-4 shadow-lg fantasy-card" style="width: 22rem; height: auto;">
      <h3 class="text-center mb-3 fantasy-font">Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label fantasy-font">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control fantasy-input"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fantasy-font">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control fantasy-input"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="d-grid">
          <button type="submit" class="btn fantasy-button">Login</button>
        </div>
        <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    handleLogin() {
      const validUsername = "pyrobansuelo";
      const validPassword = "portfolio";

      if (this.username === validUsername && this.password === validPassword) {
        this.$router.push('/portfolio');
      } else {
        this.errorMessage = "Invalid username or password.";
      }
    },
  },
};

</script>

<style>
/* Fantasy background with gradient and subtle sparkles */
.fantasy-background {
  background: linear-gradient(145deg, #2e0133, #4b0d3a, #321255);
  animation: backgroundAnimation 10s infinite alternate;
  position: relative;
}

@keyframes backgroundAnimation {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Add subtle glowing stars to the background */
.fantasy-background::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/stardust.png');
  opacity: 0.2;
  z-index: 1;
}

/* Fantasy card style */
.fantasy-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

/* Fantasy font for headings */
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');
.fantasy-font {
  font-family: 'Cinzel Decorative', serif;
  color: #2e0133;
}

/* Input fields with a glowing border */
.fantasy-input {
  border: 2px solid #4b0d3a;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: inset 0 0 5px rgba(75, 13, 58, 0.5);
}

/* Change focus effect for inputs */
.fantasy-input:focus {
  outline: none;
  box-shadow: 0 0 10px #ae5ed7;
}

/* Gradient fantasy button */
.fantasy-button {
  background: linear-gradient(to right, #ae5ed7, #521d7b);
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 20px;
  transition: background 0.5s, transform 0.2s;
}

.fantasy-button:hover {
  background: linear-gradient(to right, #c287ed, #3d1359);
  transform: scale(1.1);
}

</style>
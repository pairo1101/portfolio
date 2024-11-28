<template>
    <div class="d-flex justify-content-end align-items-center vh-100">
      <div class="card p-4 shadow-lg" style="width: 22rem; height: 100%;">
        <h3 class="text-center mb-3">Login</h3>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="form-control"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Login</button>
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
          // Redirect to dashboard upon successful login
          this.$router.push('/portfolio');
        } else {
          this.errorMessage = "Invalid username or password.";
        }
      },

      
      
    },
  };
  </script>
  
  <style>
  body {
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;
  }
  </style>
  
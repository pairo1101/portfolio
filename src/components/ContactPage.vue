<template>
    <div class="contact-container d-flex align-items-center justify-content-center vh-100">
      <div class="card contact-card shadow-lg">
        <h2 class="card-title text-center mb-4" style="color: aliceblue;">Contact Me</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              class="form-control"
              rows="5"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button type="button" class="btn btn-light w-100">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactMe",
  };
  </script>
  
  <style scoped>
  /* Dark Theme Styling */
 .form-control::placeholder{
    color:darkgray;
 }
  .contact-container {
    background-color: #121212; /* Dark background */
    color: #f5f5f5; /* Light text */
    padding: 2rem;
  }
  
  .contact-card {
    background-color: #1e1e1e; /* Slightly lighter dark background */
    border: none;
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
  }
  
  .form-control {
    background-color: #2e2e2e; /* Input field background */
    color: #f5f5f5; /* Input field text color */
    border: 1px solid #444; /* Input field border */
    border-radius: 5px;
  }
  
  .form-control:focus {
    background-color: #2e2e2e; /* Keep background consistent on focus */
    color: #f5f5f5;
    border-color: #5c5c5c; /* Subtle highlight */
    box-shadow: none;
  }
  
  .btn {
    background-color: #2e2e2e; /* Button background */
    color: #f5f5f5; /* Button text color */
    border: 1px solid #444; /* Button border */
    transition: all 0.3s ease;
  }
  
  .btn:hover {
    background-color: #444; /* Slightly lighter on hover */
    color: #ffffff;
  }
  </style>
  
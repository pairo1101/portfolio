<template>
  <div class="d-flex justify-content-start align-items-start vh-100 animated-layout">
    <!-- Personal Info Card -->
    <div class="card shadow-lg mt-5 ms-5 animate-card" style="width: 20%; height: 80%; background: #1e1e1e;">
      <div class="card-header" style="background: #2e2e2e; height: 40px;">
        <h3>Personal Info</h3>
      </div>
      <div class="card m-auto mt-auto" style="height: 20%; width: 50%;">
        <img src="../../public/profile.png" style="width: 100%; height: 100%; object-fit: fill;">
      </div>
      <div class="card p-4 mb-auto justify white-text" style="height: 20%; background: #2e2e2e;">
        <h4>Name:</h4>
        <h5>Christian Pyro Bansuelo</h5>
      </div>
      <div class="card p-4 mt-auto white-text" style="height: 60%; background: #2e2e2e;">
        <h5>Education</h5>
        <br>
        <h5>School:</h5>
        <p>Technological Institute of the Philippines Manila</p>
        <h5>Program:</h5>
        <p>BS CpE</p>
        <h5>Year Level:</h5>
        <p>4th Year</p>
      </div>
    </div>

    <!-- Content Card -->
    <div class="card shadow-lg mt-5 ms-auto animate-card" style="width: 50%; height: auto; background: #1e1e1e; color: white;">
       <div class="card-header" style="background: #2e2e2e; height: 40px; text-align: left;">
          <h3>Bio</h3>
         </div>
      <div class="card-body p-4" style="text-align: left;">
        <h5 style="margin-bottom: 1.5rem;">
          <br>
          I am an aspiring software engineer who enjoys picking apart and solving complex problems and refining solutions to optimize them.
        </h5>
        <br><br>
      <div style="margin-bottom: 1.5rem;">
      <h3>Skills:</h3>
      <p style="margin: 0;">Backend Programming, Application Development, Front-end development, Arduino and NodeMCU programming</p><br><br>
      <h3>Programming Knowledge:</h3>
      <h5>Python, PHP, C++, HTML, CSS, JavaScrip</h5>
      <br><br>

      <h3>Interests:</h3>
      <br>
      <h4>Game Development and Backend Development</h4>
    </div>
  </div>
</div>



    <!-- Social Media Links Card -->
    <div class="card shadow-lg mt-5 ms-auto me-5 animate-card" style="width: 20%; height: 50%; background: #1e1e1e;">
      <div class="card-header" style="background: #2e2e2e; height: 40px;">
        <h3>Social Media Links</h3>
      </div>
      <div class="card p-4 d-flex justify-content-start align-items-start" style="flex: 1; background-color: #121212; color: #f0f0f0;">
        <p>
          <a href="https://www.facebook.com/christianpyro.bansuelo/">
            <img src="../../public/facebook.jpg" style="width: 40px; height: 40px; object-fit: fill; margin-right: 10px;">
          </a>
          Christian Pyro Bansuelo
        </p>
        <p><a href="instagram.com"><img src="../../public/instaIcon.jpg" style="width: 40px; height: 40px; object-fit: fill; margin-right: 10px;"></a>Solidipai</p>
      <p><a href="https://github.com/pairo1101"><img src="../../public/github.jpg" style="width: 40px; height: 40px; object-fit: fill; margin-right: 10px;"></a>pairo1101</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
/* General styling */
.white-text {
  color: aliceblue;
}

body {
  margin: 0;
  font-family: "Arial", sans-serif;
  background-color: #121212;
  color: #f0f0f0;
}

.d-flex {
  gap: 2rem; /* Add spacing between cards */
}

/* Card styling */
.card {
  border: none;
  border-radius: 8px; /* Rounded corners for a modern look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Soft shadow */
}

.card-header,
.card-footer {
  border-radius: 8px 8px 0 0; /* Rounded corners for the header/footer */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vh-100 {
  min-height: 100vh;
}

h3 {
  color: aliceblue;
}

/* Animation styling */
.animated-layout {
  position: relative;
  overflow: hidden;
}

.animate-card {
  animation: slideIn 1s ease-out forwards;
  opacity: 0;
}

/* Individual delay for cards */
.animate-card:nth-child(1) {
  animation-delay: 0.2s;
}

.animate-card:nth-child(2) {
  animation-delay: 0.4s;
}

.animate-card:nth-child(3) {
  animation-delay: 0.6s;
}

/* Keyframes for sliding in */
@keyframes slideIn {
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

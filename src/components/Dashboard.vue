<template>
  <div class="fantasy-background">
    <div class="content-wrapper py-5">
      <div class="row justify-content-center">
        <!-- Link Profile -->
        <div class="col-md-4 mb-4">
          <router-link to="/portfolio/profile" class="no-underline">
            <div class="card link-square text-center shadow fantasy-card">
              <div class="card-body">
                <h5 class="card-title fantasy-font">Profile</h5>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Link Showcase -->
        <div class="col-md-4 mb-4">
          <router-link to="/portfolio/showcase" class="no-underline">
            <div class="card link-square text-center shadow fantasy-card">
              <div class="card-body">
                <h5 class="card-title fantasy-font">Showcase</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="row justify-content-center">
        <!-- Link Creative -->
        <div class="col-md-4 mb-4">
          <router-link to="/portfolio/creative" class="no-underline">
            <div class="card link-square text-center shadow fantasy-card">
              <div class="card-body">
                <h5 class="card-title fantasy-font">Creative</h5>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Link Contact -->
        <div class="col-md-4 mb-4">
          <router-link to="/portfolio/contact" class="no-underline">
            <div class="card link-square text-center shadow fantasy-card">
              <div class="card-body">
                <h5 class="card-title fantasy-font">Contact</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
/* Fantasy Background */
.fantasy-background {
  background: linear-gradient(135deg, #2e0133, #521d7b, #1e1036);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fantasy-background::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/stardust.png');
  opacity: 0.2;
  z-index: 1;
}

/* Content Wrapper to center content */
.content-wrapper {
  z-index: 2;
  width: 100%;
  max-width: 1200px;
}

/* Card Styling */
.fantasy-card {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  position: relative;
  overflow: hidden;
}

.fantasy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 0 15px #b98ae9;
  border: 2px solid #b98ae9;
}

/* Add Glow Animation */
.fantasy-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(185, 138, 233, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s;
  transform: rotate(45deg);
  z-index: 0;
}

.fantasy-card:hover::before {
  opacity: 1;
}

/* Card Body */
.card-body {
  z-index: 2;
  position: relative;
}

/* Font for Titles */
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');
.fantasy-font {
  font-family: 'Cinzel Decorative', serif;
  color: #e0e0e0;
  text-shadow: 0 0 5px #b98ae9;
}

/* Link Styling */
.no-underline {
  text-decoration: none;
  color: inherit;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
  }
}
</style>

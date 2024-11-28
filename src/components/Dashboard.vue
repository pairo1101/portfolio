<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <!-- Link Profile -->
      <div class="col-md-4 mb-4">
        <router-link to="/portfolio/profile" class="no-underline">
          <div class="card link-square text-center shadow">
            <div class="card-body">
              <h5 class="card-title">Profile</h5>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Link Showcase -->
      <div class="col-md-4 mb-4">
        <router-link to="/portfolio/showcase" class="no-underline">
          <div class="card link-square text-center shadow">
            <div class="card-body">
              <h5 class="card-title">Showcase</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="row justify-content-center">
      <!-- Link Creative -->
      <div class="col-md-4 mb-4">
        <router-link to="/portfolio/creative" class="no-underline">
          <div class="card link-square text-center shadow">
            <div class="card-body">
              <h5 class="card-title">Creative</h5>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Link Contact-->
      <div class="col-md-4 mb-4">
        <router-link to="/portfolio/contact" class="no-underline">
          <div class="card link-square text-center shadow">
            <div class="card-body">
              <h5 class="card-title">Contact</h5>
            </div>
          </div>
        </router-link>
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
/* General Styling */
body {
  background-color: #121212; /* Professional dark background */
  color: #f5f5f5; /* Soft white for readability */
  font-family: "Inter", sans-serif; /* Modern font choice */
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1100px;
  padding-top: 50px;
}

/* Link Styling */
.no-underline {
  text-decoration: none; /* Removes underline */
  color: inherit; /* Maintains card text color */
}

/* Card Styling */
.link-square {
  cursor: pointer;
  background-color: #1e1e1e; /* Dark gray background */
  border: none; /* Removes border for a clean look */
  border-radius: 10px; /* Subtle rounding */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  color: #f5f5f5; /* Matches text color for consistency */
}

.link-square:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8); /* Subtle shadow */
  background-color: #292929; /* Slightly lighter hover effect */
}

.card-body {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600; /* Semi-bold for emphasis */
  text-transform: capitalize; /* Clean casing */
  margin: 0;
  color: #e0e0e0; /* Slightly dimmed white for a polished look */
}

/* Row Styling */
.row {
  gap: 1.5rem; /* Adjust spacing between columns */
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

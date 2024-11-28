<template>
  <Navbar></Navbar>
  <router-view></router-view>
  

</template>

<script>
import LoginPage from "./components/LoginPage.vue";
import Dashboard from "./components/Dashboard.vue";
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/Profile.vue";
import ContactPage from "./components/ContactPage.vue";
import Showcase from "./components/Showcase.vue";


export default {
  components: {
    LoginPage,
    Dashboard,
    Navbar,
    AboutMe,
    ContactPage,
    Showcase
  }
};
</script>

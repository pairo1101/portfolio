<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-text" style="font-family: 'Arial', sans-serif; font-size: 36px; font-weight: bold;">
      Portfolio
    </span>
  </div>
</nav>



</template>

<script>

import { useRoute } from 'vue-router'; 
import { computed } from 'vue';
    export default {
        
            name:'Navbar',

      
        setup(){
        const route = useRoute();

        const loggedInRoute = computed(() => route.path === '/portfolio');
        return {loggedInRoute};
      }
        

    }
</script>
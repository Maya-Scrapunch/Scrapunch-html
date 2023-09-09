  <script setup lang="ts">
  import { createRouter, createWebHistory } from 'vue-router'
  </script>

  <template>
    <div id="app">
      <custom-toolbar></custom-toolbar>
      <div>
        <router-view />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import CustomToolbar from './views/Headbar.vue';

  export default {
    components: {
      CustomToolbar,
    },
  };
  </script>


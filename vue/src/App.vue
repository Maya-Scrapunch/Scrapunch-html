  <script setup lang="ts">
  import { createRouter, createWebHistory } from 'vue-router'
  </script>

  <template>
    <div id="app">
      <custom-toolbar></custom-toolbar>
      <div class="margin-top-70px">
        <router-view />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import router from './router/index';
  import CustomToolbar from './views/Headbar.vue';

  export default {
    components: {
      CustomToolbar,
    },
  };
  </script>

<style scoped>
.v-application__wrap {
  display: none;
}
.margin-top-70px {
  margin-top: 70px;
  margin-left: 20px;
}
</style>

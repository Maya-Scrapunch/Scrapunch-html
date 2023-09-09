<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
</script>

<template>
    <custom-toolbar></custom-toolbar>
</template>
 
<script lang="ts">
import CustomToolbar from './views/Headbar.vue';

export default {
  components: {
    CustomToolbar,
  },
};
</script>


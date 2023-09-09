<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >
        <!-- ここまで追加 -->
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="navigateToHome">Home</v-btn>
        <v-btn text @click="navigateToPage1">Page 1</v-btn>
        <v-btn text @click="navigateToPage2">Page 2</v-btn>
      </v-app-bar>
    </header>
  </v-app>
</template>
 
<script lang="ts">

</script>

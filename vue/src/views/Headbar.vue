<template>
  <v-app>
    <header>
      <v-app-bar app dark>
        <v-toolbar-title>いなわしろこなん</v-toolbar-title>
        <v-spacer></v-spacer>
        <RouterLink to="/" class="link">ホーム</RouterLink>
        <RouterLink to="/access" class="link">アクセス</RouterLink>
        <RouterLink to="/tourism" class="link">観光</RouterLink>
        <RouterLink to="/models" class="link">モデルケース</RouterLink>
      </v-app-bar>
    </header>
  </v-app>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style src="/src/assets/css/main.css"></style>
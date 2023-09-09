<template>
  <v-app>
    <header>
      <v-app-bar app dark>
        <v-toolbar-title>
            <div>
               <img src='../assets/img/icon.png' alt="外部の画像" width="130" height="60" @click="goToHomePage">
            </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <RouterLink to="/access" class="link">アクセス</RouterLink>
        <RouterLink to="/tourism" class="link">観光</RouterLink>
        <RouterLink to="/models" class="link">モデルケース</RouterLink>
      </v-app-bar>
    </header>
  </v-app>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    // ホームページに遷移するメソッド
    goToHomePage() {
      // Vue Routerを使用して指定のURLに遷移
      this.$router.push('/');
    }
  }
});
</script>

<style src="/src/assets/css/main.css"></style>
<template>
  <v-app>
    <header>
      <v-app-bar app dark>
        <v-toolbar-title>
            <RouterLink to="/">
               <img src='../assets/img/icon.png' alt="外部の画像" width="130" height="60" @click="goToHomePage">
            </RouterLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn RouterLink to="/access" class="link">アクセス</v-btn>
        <v-btn RouterLink to="/tourism" class="link">観光</v-btn>
        <v-btn RouterLink to="/models" class="link">モデルコース</v-btn>
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

<style scoped>
.link {
  background-color: #CCFFFF; /* ホバー時の色 */
  color: #555; /* ホバー時のテキストカラー */
  padding: 5px 10px;
  margin-right: 10px;
  text-decoration: none;
}

.link:hover {
  background-color: #CCFFFF;
  color: #333;
}
</style>

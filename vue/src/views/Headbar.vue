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

<style scoped>
.link {
  background-color: #dcdcdc; /* ホバー時の色 */
  color: #555; /* ホバー時のテキストカラー */
  padding: 5px 10px;
  margin-right: 10px;
  text-decoration: none;
}

.link:hover {
  background-color: #f5deb3;
  color: #333;
}
</style>

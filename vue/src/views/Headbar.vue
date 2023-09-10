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
        <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="link"
          v-bind="props"
        >
          観光
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <RouterLink to="/tourism">食事</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/">アクティビティー</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/">自然</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/">文化体験</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/">宿泊</RouterLink>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn RouterLink to="/models" class="link">モデルコース</v-btn>
        
      </v-app-bar>
    </header>
  </v-app>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      dialogOpen: false,
    };
  },
  methods: {
    // ホームページに遷移するメソッド
    goToHomePage() {
      // Vue Routerを使用して指定のURLに遷移
      this.$router.push('/');
    },
    open(){
      this.dialogOpen=true;
    },
    close(){
      this.dialogOpen=false;
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

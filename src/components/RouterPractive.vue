<template>
  <div class="app">
    <h2>Vue路由測試</h2>
    <!-- 導航區 -->
    <div class="navigate">
      <router-link to="/Home" active-class="active">首頁</router-link>
      <router-link :to="{name:'News'}" active-class="active">新聞</router-link>
      <router-link :to="{path:'/About'}" active-class="active">關於</router-link>
    </div>
    <!-- 展示區 -->
    <div class="main-content">
      展示各種路徑內容
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink ,RouterView } from 'vue-router';
</script>

<style scoped>
.app {
  width: 100%;
  height: 700px;
  /* background-color: #2a2c2c; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 32px;
}
.navigate {
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
a {
  padding: 2px 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 4px;
  background-color: #585858;
}
a:not(.active):hover {
  background-color: #919191;
}
.active {
  background-color: #e8e8e8;
  color: #000;
}
.main-content {
  width: 100%;
  /* min-width: 400px; */
  max-width: 800px;
  height: 500px;
  border: 2px solid #807f7f;
}
</style>

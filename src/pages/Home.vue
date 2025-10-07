<template>
  <div class="home">
    <h2>Home組件</h2>
     <h2>{{ count }} 秒後跳轉到 News 頁面</h2>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const count = ref(3); // 初始倒數秒數
onMounted(() => {
  const timer = setInterval(() => {
    count.value--; // 每秒減一
    if (count.value === 0) {
      clearInterval(timer); // 停止倒數
      console.log("跳轉到 news 頁面");
      router.replace("/news"); // 或 router.push("/news")
    }
  }, 1000);
});
</script>

<style scoped></style>

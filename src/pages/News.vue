<template>
  <div class="News">
    <!-- 導航區 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNweDetail(news)">跳轉</button>
        <router-link
          :to="{
            name: 'Detail',
            params: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
        >
          {{ news.title }}
        </router-link>
      </li>
    </ul>
    <!-- 展示區 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const newsList = reactive([
  { id: 1, title: "新聞001", content: "這是新聞001的內容" },
  { id: 2, title: "新聞002", content: "這是新聞002的內容" },
  { id: 3, title: "新聞003" },
  { id: 4, title: "新聞004", content: "這是新聞004的內容" },
]);
interface NewsInter{
  id: number;
  title: string;
  content?: string;
}

function showNweDetail(news: NewsInter) {
  router.push({
    name: "Detail",
    params: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  });
}
</script>

<style scoped>
.News {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  flex-direction: row;
  gap: 20px;
}
.news-content {
  width: 60%;
  height: 90%;
  border: 3px solid #7a7a7a;
  background-color: rgb(15, 15, 15);
  border-radius: 12px;
}
li{
  margin: 8px 0;
  list-style: none; /* ✅ 移除前面的圓點符號 */
}
button {
  margin-right: 8px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #87bbff;
  color: rgb(48, 48, 48);
  border: none;
  cursor: pointer;
}

</style>

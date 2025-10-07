<template>
  <ul class="news-list">
    <li>編號:{{id}}</li>
    <li>標題:{{title}}</li>
    <li>內容:{{content}}</li>
  </ul>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
// let route = useRoute();
defineProps<{
  id: string;
  title: string;
  content?: string;
}>();
</script>

<style scoped></style>

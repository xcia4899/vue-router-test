//創建一個路由器，並且傳遞出去

//引入createRouter函數
import { createRouter, createWebHistory } from "vue-router";
//引入組件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";

//創建路由器
export default createRouter({
  //路由工作模式
  history: createWebHistory(),
  //路由規則
  routes: [
    {
      name: "Home",
      path: "/Home",
      component: Home,
    },
    {
      name: "About",
      path: "/About",
      component: About,
    },
    {
      name: "News",
      path: "/News",
      component: News,
      children: [
        {
          name: "Detail",
          path: "detail/:id/:title/:content?", // 子路由會變成 /News/detail
          component: Detail, // 對應的子元件
          props: true, // 啟用 props 傳遞參數
        },
      ],
    },
  ],
});

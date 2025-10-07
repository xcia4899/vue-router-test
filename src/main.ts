import "./assets/main.css";
import "./style/main.css";
import { createApp } from "vue";
import App from "./App.vue";
//引入路由器
import router from "./router";

const app = createApp(App);
//將路由器掛載到Vue實例上
app.use(router);

app.mount("#app");

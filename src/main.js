import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/global.css";
import "./assets/css/tailwind.css";
import router from "./router";
createApp(App).use(router).mount("#app");

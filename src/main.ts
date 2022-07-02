import { createApp } from "vue";
import App from "./App.vue";
// 引入路由配置
import * as VueRouter from "vue-router";
import routes from "./routes";
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus).mount("#app");

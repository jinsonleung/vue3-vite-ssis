/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:20:42
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 16:23:40
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store';
import axios from "axios"; //引入axios

const app = createApp(App);
//全局axios
app.config.globalProperties.$axios = axios;

app.use(router).use(ElementPlus).use(store);
app.mount('#app');
/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:20:42
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-24 10:29:29
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store';
import axios from "axios"; //引入axios
import '@/styles/index.scss'    //引入scss
import '@/styles/fonts/remixicon.css' //引入icon



const app = createApp(App);
//全局axios
// app.config.globalProperties.$axios = axios;

app.use(router).use(ElementPlus).use(store);
app.mount('#app');
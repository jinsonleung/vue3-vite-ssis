/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:44:52
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 14:20:18
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\router\index.ts
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Index from "../views/index.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});


// 路由前置守卫
router.beforeEach(function (to, from, next) {
  // 你需要在跳转路由前做点啥
  next();           // next()函数为必须，在前置守卫结束的时候必须进行next来决定路由走向，不然会发生死循环
})

// 路由后置守卫
router.afterEach(() => {
  // 你需要做点啥，在跳转路由之后，这里不需要next()方法
})


export default router;

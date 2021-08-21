/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:44:52
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-12 15:43:03
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\router\index.ts
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Index from "@/views/index.vue";
import TestAxios from "@/views/TestAxios.vue"
import Env from "@/views/env/index.vue"

const routes = [
  { //默认页面
    path: '/',
    redirect: '/introduce'
  },
  { //登录页面
    path: '/login',
    name: 'Login',
    component: ()=>import('@/views/Login.vue')
  },
  { //简介页面
    path: '/introduce',
    name: 'Introduce',
    component: ()=>import('@/views/Introduce.vue')
  },

  { //主页面
    path: '/home',
    name: 'Home',
    component: ()=>import('@/views/Home.vue')
  },

  { //axios测试页面
    path: '/testaxios',
    name: 'Testaxios',
    component: ()=>import('@/views/TestAxios.vue')
  },
  { //获取环境变量页面
    path: '/env',
    name: 'Env',
    component: ()=>import('@/views/env/index.vue')
  },



  { path: "/home", component: Home }, //主界面页面
  { path: "/testaxios", component: TestAxios }, //axios 测试页面
  { path: "/env", component: Env }, //获取环境变量页面
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

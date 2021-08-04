import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Index from "@/views/index.vue"

const routes = [
    {path:"/", component: Index},
    {path:"/login", component: Login},
    {path:"/home", component: Home},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
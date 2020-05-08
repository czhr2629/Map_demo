import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "../pages/home.vue"

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/city/name/:name",
            component:()=> import('../pages/city.vue')
        }

    ]
})
export default router
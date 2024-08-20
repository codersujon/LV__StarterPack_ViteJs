import { createWebHistory, createRouter } from 'vue-router'


// Backend
import adminDashboard from "../components/admin/home/Index.vue"

// FrontEnd
import homePage from "../components/pages/home/Index.vue"

// Not Found
import notFound from "../components/notFound.vue"

const routes = [

    //Backend
    {
        path: '/admin/home',
        component: adminDashboard
    },

    //FrontEnd
    {
        path: '/',
        component: homePage
    },

    // notFount
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

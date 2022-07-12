import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home-page.vue';
import Shope from '../pages/Shope-page.vue'
import Cadastro from '../pages/Cadastro-page.vue'



const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/shope',
        name: 'Shope',
        component: Shope
    },
    {
        path:'/cadastro',
        name:'Cadastro',
        component: Cadastro
    }
   

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes

})

export default router;
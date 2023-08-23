import { createRouter, createWebHistory } from 'vue-router'
import SuperTechnicianList from './components/SuperTechnicianList.vue'
import Home from './components/Views/Home.vue'

const routes = [

    {
        path: encodeURI('/'),
        name: 'Home',
        component: Home,
    },
    {
        path: encodeURI('/Montør'),
        name: 'Montør',
        component: SuperTechnicianList,
    },
    {
        path: encodeURI('/Overmontør'),
        name: 'Overmontør',
        component: SuperTechnicianList,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
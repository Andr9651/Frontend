import { createRouter, createWebHistory } from 'vue-router'
import SuperTechnicians from './components/views/SuperTechnicians.vue'
import SubTechnicians from './components/views/SubTechnicians.vue'
import HomePage from './components/views/HomePage.vue'

const routes = [

    {
        path: encodeURI('/'),
        name: 'Hjem',
        component: HomePage,
    },
    {
        path: encodeURI('/Montører'),
        name: 'Montører',
        component: SubTechnicians,
    },
    {
        path: encodeURI('/Overmontører'),
        name: 'Overmontører',
        component: SuperTechnicians,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/NavBar',
        name: 'navbar',
        component: () =>
            import ('../components/NavBar.vue')
    },
    {
        path: '/Footer',
        name: 'footer',
        component: () =>
            import ('../components/FooterComp.vue')
    },
    {
        path: '/Slider',
        name: 'slider',
        component: () =>
            import ('../components/SliderComp.vue')
    },
    {
        path: '/Menu',
        name: 'menu',
        component: () =>
            import ('../components/MenuProduct.vue')
    },
    {
        path: '/Productos',
        name: 'productos',
        component: () =>
            import ('../components//ProductosList.vue')
    },
    {
        path: '/Contacto',
        name: 'contacto',
        component: () =>
            import ('../components/ContactoForm.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
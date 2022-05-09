//import ( createapp ) from 'vue'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate';

//ESTILOS
import 'bootstrap'
//COMPONENTES
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
import SliderComp from './components/SliderComp.vue'
import MenuProduct from './components/MenuProduct.vue'
import ProductosList from './components/ProductosList.vue'
import ContactoForm from './components/ContactoForm.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [

    { path: '/navbar', component: NavBar },
    { path: '/footer', component: FooterComp },
    { path: '/slider', component: SliderComp },
    { path: '/menu', component: MenuProduct },
    { path: '/productos', component: ProductosList },
    { path: '/contacto', component: ContactoForm }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,

    render: h => h(App)
}).$mount('#app')
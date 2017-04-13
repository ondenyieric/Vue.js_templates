import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Faq from './Faq.vue'
import Navbar from './Navbar.vue'

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

Vue.use(VueRouter);

const routes=[
  {path:'/',component: App},
  {path:'/faq',component: Faq},

]

const router =new VueRouter({
  routes
})



const app=new Vue({
  router,
  components:{
    Navbar
 }
}).$mount('#app')
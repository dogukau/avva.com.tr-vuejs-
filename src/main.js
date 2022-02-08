import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import routes from "@/routes";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store';
import $ from 'jquery';
Vue.use(VueRouter);

const router =new VueRouter({
  routes :routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')

Vue.component('add-to-cart',require('./components/AddToCart').default);


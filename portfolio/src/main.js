import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './assets/css/styles.css'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

export default new VueRouter({
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    // { path: '/login', component: Login },
    // { path: '/about', component: About }
  ]
})


new Vue({
  render: h => h(App),
}).$mount('#app')

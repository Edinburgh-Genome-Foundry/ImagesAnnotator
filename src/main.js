import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import About from './components/About'
// import auth from './auth'

// Globally register bootstrap-vue components

Vue.use(VueResource)
Vue.use(VueRouter)

// Check the users auth status when the app starts
// auth.checkAuth()

const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '*',
  component: Home
}
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

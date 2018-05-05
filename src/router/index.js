import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MainContent from '@/components/mainContent'
import Login from '@/components/login'
import Register from '@/components/register'
import firebaseConfig from '@/components/firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/main',
      name: 'mainContent',
      component: MainContent
    }, {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

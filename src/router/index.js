import Vue from 'vue'
import Router from 'vue-router'
import createTask from '@/components/createTask'
import test from '@/components/test'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'createTask',
      component: createTask
    }, {
      path: '/test',
      name: 'test',
      component: test
    }

  ]
})

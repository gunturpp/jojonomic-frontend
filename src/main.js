// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// src https://bootstrap-vue.js.org/docs
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
import createTask from './components/createTask'

Vue.use(BootstrapVue)
Vue.use(moment)
Vue.config.productionTip = false

// make custom tag in each component vue
Vue.component('createtask', createTask)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// src https://bootstrap-vue.js.org/docs
import Vue from 'vue'
import App from './App'
import router from './router'
// npm library
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
// call component created
import mainContent from './components/mainContent'
import header from './components/header'
import footer from './components/footer'

Vue.use(BootstrapVue)
Vue.use(moment)
Vue.config.productionTip = false

// make custom tag in each component to App.vue
Vue.component('app-header', header)
Vue.component('main-content', mainContent)
Vue.component('app-footer', footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style.css'
import '@/assets/bootstrap.css'
import '@/assets/animate.css'
import Page from './components/Page/Page'

Vue.config.productionTip = false

Vue.component('page', Page)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

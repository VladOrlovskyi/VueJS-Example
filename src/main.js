// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FirstBlock from '@/components/FirstBlock'
import SecondBlock from '@/components/SecondBlock'

Vue.config.productionTip = false

Vue.component('app-first-block', FirstBlock)
// Vue.component('app-second-block', SecondBlock)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',

})


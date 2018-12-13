import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/rem'
import * as cons from './global/cons'
import * as funs from './global/funs'
import * as apiGroup from './fetch'
import { validate } from './global/validate'
import { Toast } from 'mint-ui'

Object.assign(Vue.prototype, {
  $cons: cons,
  $funs: funs,
  $toast: Toast,
  $http: apiGroup,
  $validate: validate
})

Vue.mixin({
  methods: {
    showLoading() {
      this.$store.dispatch('showLoading', true)
    }
  }
})

Vue['config'].productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

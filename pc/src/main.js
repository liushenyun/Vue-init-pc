import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as cons from './global/cons'
import * as funs from './global/funs'
import * as utils from './global/utils'
import * as apiGroup from './fetch'
import { validate } from './global/validate'
import { Message } from 'element-ui'
import 'babel-polyfill'

Object.assign(Vue.prototype, {
  $cons: cons,
  $funs: funs,
  $utils: utils,
  $message: Message,
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

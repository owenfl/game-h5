import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from './axios'

import NutUI from '@nutui/nutui-jdl';
import '@nutui/nutui-jdl/dist/nutui.css';
NutUI.install(Vue);

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')

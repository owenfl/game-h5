import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from './axios'


import NutUI from '@nutui/nutui-jdl';
import '@nutui/nutui-jdl/dist/nutui.css';
NutUI.install(Vue);


// let clientWidth = document.documentElement.clientWidth;
// if (clientWidth > 768) {
//   document.documentElement.style.fontSize = 100 + 'px';
// }


Vue.prototype.$EventBus = new Vue();
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://live.zbitcloud.com/'
Vue.config.productionTip = false
document.title = '小米直播'

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')

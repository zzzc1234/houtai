import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/assets/css/global.css'
import '../src/assets/fonts/iconfont.css'
import axios from 'axios'

// 设置axios请求的默认host
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 将axios绑定给vue成为一个属性
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
import axios from 'axios'
import Bus from "../src/utils/bus"
Vue.config.productionTip = false
import * as filters from "./utils/filters"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])//插入过滤器名和对应方法
})
axios.defaults.headers.post['Content-Type'] = 'application/json'
import Interceptors from './axios/index' // 拦截器
Vue.use(Interceptors.request) // 请求拦截器
Vue.use(Interceptors.response) // 响应拦截器
Vue.prototype.$axios = axios
Vue.prototype.Bus = Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),//render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h
}).$mount('#app')

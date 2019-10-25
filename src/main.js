import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import './assets/element-import.js'
import './assets/element-variables.scss'
Vue.config.productionTip = false
// 设置语言
locale.use(lang)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

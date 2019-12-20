import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
import localforage from 'localforage'

Vue.use(ElementUI)
const currentEnv = _.assign(process.env)
Vue.config.productionTip = currentEnv.VUE_APP_DEBUG
const mockInstance = axios.create()
const apiInstance = axios.create()

const init = (env) => {
  mockInstance.defaults.baseURL = currentEnv.VUE_APP_MOCK_SERVER
  apiInstance.defaults.baseURL = currentEnv.VUE_APP_API_SERVER
  _.assign(window, {
    _,
    axios,
    localforage,
    moment,
    mockInstance,
    apiInstance,
    currentEnv: env
  })  
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const configUrl = './static/extraConfig.json'
axios.get(configUrl).then(async (extraConfigRes) => {
  if (extraConfigRes && extraConfigRes.data) {
    return init(_.assign(currentEnv, extraConfigRes.data))
  }
  return init(currentEnv)
 })


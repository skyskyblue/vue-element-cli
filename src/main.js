import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import _ from 'lodash'
import localForage from 'localforage'

const currentEnv = _.assign(process.env)
Vue.config.productionTip = currentEnv.VUE_APP_DEBUG
const mockInstance = axios.create()
const apiInstance = axios.create()

const init = () => {
  mockInstance.defaults.baseURL = currentEnv.VUE_APP_MOCK_SERVER
  apiInstance.defaults.baseURL = currentEnv.VUE_APP_API_SERVER
  _.assign(window, {
    _,
    axios,
    localForage,
    mockInstance,
    apiInstance
  })
  
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

init()



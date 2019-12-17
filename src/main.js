import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
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
    moment,
    mockInstance,
    apiInstance
  })
  _.assign(Vue.prototype, {
    _,
    axios,
    localForage,
    moment
  })
  
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

init()



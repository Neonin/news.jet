import '@/assets/scss/main.scss'
import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

axios.defaults.baseURL = `https://newsapi.org/v2/`

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

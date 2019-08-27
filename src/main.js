import '@/assets/scss/main.scss'
import Vue from 'vue'
import VueGeolocation from 'vue-browser-geolocation'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueGeolocation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

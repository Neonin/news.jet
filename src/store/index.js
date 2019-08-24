import Vue from 'vue'
import Vuex from 'vuex'
import news from './news'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    user
  }
})

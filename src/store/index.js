import Vue from 'vue'
import Vuex from 'vuex'
import news from './news'
import user from './user'
import weather from './weather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    user,
    weather
  }
})

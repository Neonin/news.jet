import axios from 'axios'

const options = {
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  token: 'b156dce9f12975c304d7715cc08cf4ed'
}

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async fetchWeather ({ commit }, city) {
      try {
        const response = await axios.get(`${options.baseURL}/weather?q=${city}&appid=${options.token}`)
        const data = response.data

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {}
}

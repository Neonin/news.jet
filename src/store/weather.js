import axios from 'axios'

const options = {
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  token: 'b156dce9f12975c304d7715cc08cf4ed',
  lang: 'ua'
}

export default {
  namespaced: true,
  state: {
    weather: []
  },
  mutations: {
    setWeather (state, weather) {
      const candidate = state.weather.find(c => c.id === weather.id)

      if (!candidate) {
        state.weather.push(weather)
      }
    }
  },
  actions: {
    async fetchWeather ({ commit }, city) {
      try {
        const response = await axios.get(`${options.baseURL}/weather?q=${city}&units=metric&lang=${options.lang}&appid=${options.token}`)
        const data = response.data

        commit('setWeather', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getWeather: state => state.weather
  }
}

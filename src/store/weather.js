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
    setWeather (state, { data, city }) {
      const candidate = state.weather.find(c => c.id === data.id)

      if (!candidate) {
        if (city) data.city = city

        state.weather.push(data)
      }
    },
    clearWeather (state) {
      state.weather = []
    },
    removeWeather (state, item) {
      state.weather = state.weather.filter(c => c.city !== item)
    }
  },
  actions: {
    async fetchWeather ({ commit }, city) {
      try {
        const response = await axios.get(`${options.baseURL}/weather?q=${city}&units=metric&lang=${options.lang}&appid=${options.token}`)
        const data = response.data

        commit('setWeather', { data, city })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchWeatherByCoord ({ commit }, { lat, lng }) {
      try {
        const response = await axios.get(`${options.baseURL}/weather?lat=${lat}&lon=${lng}&units=metric&lang=${options.lang}&appid=${options.token}`)
        const data = response.data

        commit('setWeather', { data })
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    getWeather: state => state.weather
  }
}

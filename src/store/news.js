import axios from 'axios'

const options = {
  token: '6dcb5f6d2a06444bbc60b04a8de62639',
  country: 'ua'
}

export default {
  namespaced: true,
  state: {
    news: []
  },
  mutations: {
    setNews (state, news) {
      news.forEach(item => {
        state.news.push(item)
      })
    }
  },
  actions: {
    async fetchNews ({ commit }) {
      try {
        const response = await axios.get(`/top-headlines?country=${options.country}&apiKey=${options.token}`)
        const data = response.data

        if (data.status === 'ok') {
          commit('setNews', data.articles)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getNews: state => state.news
  }
}

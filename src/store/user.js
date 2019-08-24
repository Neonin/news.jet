export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    signIn ({ commit }, user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user.login === 'admin' && user.password === '1234') {
            commit('setUser', user)
            resolve()
          } else {
            // eslint-disable-next-line
            reject('invalid data')
          }
        }, 2000)
      })
    }
  },
  getters: {
    getUser: state => state.user
  }
}

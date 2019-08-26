import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import uk from 'vuetify/es5/locale/uk'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#009688',
        secondary: '#3f51b5',
        accent: '#4caf50',
        error: '#f44336',
        warning: '#ff5722',
        info: '#2196f3',
        success: '#8bc34a'
      }
    }
  },
  lang: {
    locales: { uk },
    current: 'uk'
  },
  icons: {
    iconfont: 'mdi'
  }
})

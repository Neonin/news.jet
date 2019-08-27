<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ dataWeather.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ getDay }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col cols="6">
          <div class="display-3">{{ Math.round(dataWeather.main.temp) }}&deg;C</div>
          <div>{{ dataWeather.weather[0].description }}</div>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="require(`@/assets/img/svg/${dataWeather.weather[0].icon}.svg`)"
            :alt="dataWeather.weather[0].description"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ dataWeather.wind.speed }} м/с</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ dataWeather.main.humidity }}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    dataWeather: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
    ]
  }),
  computed: {
    getDay () {
      const days = ['Нд.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']
      const month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
      const date = new Date()
      date.setTime(this.dataWeather.dt * 1000)

      return `${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]}`
    }
  }
}
</script>

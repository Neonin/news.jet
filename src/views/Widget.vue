<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-autocomplete
                v-model="selected"
                :items="cities"
                :loading="isLoading"
                :search-input.sync="search"
                chips
                label="Пошук міста"
                multiple
                placeholder="Обрати місто"
                prepend-icon="mdi-flag"
                item-text="name"
                item-value="name"
                hide-no-data
                hide-selected
                return-object
              >
                <template v-slot:selection="data">
                  <v-chip
                    :input-value="data.selected"
                    close
                    @click:close="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-autocomplete>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :disabled="!selected.length"
                @click="fetchWeather"
              >
                Показати погоду
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, idx) in getWeather"
          :key="idx"
          md="6"
          lg="4"
        >
          <CardCity :dataWeather="item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CardCity from '@/components/CardCity'

export default {
  components: {
    CardCity
  },
  data: () => ({
    isLoading: false,
    selected: [],
    entries: [],
    // cities: [
    //   { name: 'Київ' },
    //   { name: 'Хмельницький' },
    //   { name: 'Львів' }
    // ],
    search: null
  }),
  computed: {
    getWeather () {
      return this.$store.getters['weather/getWeather']
    }
  },
  mounted () {
    this.$getLocation()
      .then(coordinates => {
        this.fetchWeatherByCoord(coordinates.lat, coordinates.lng)
      })
      .catch(() => {
        alert('Для показу погоди у Вашому місті, дозвольте перегляд ваших геоданих або виберіть місто зі списку.')
      })
  },
  methods: {
    remove (item) {
      const index = this.selected.indexOf(item.name)

      if (index >= 0) this.selected.splice(index, 1)
    },
    fetchWeatherByCoord (lat, lng) {
      this.$store.dispatch('weather/fetchWeatherByCoord', { lat, lng })
    },
    fetchWeather () {
      this.selected.forEach(item => {
        this.$store.dispatch('weather/fetchWeather', item)
      })
    }
  }
}
</script>

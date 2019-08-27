<template>
  <v-app class="widget">
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-autocomplete
                v-model="selected"
                :items="dataCities"
                chips
                label="Пошук міста"
                multiple
                placeholder="Обрати місто"
                prepend-icon="mdi-flag"
                item-text="name"
                item-value="name"
                hide-no-data
                hide-selected
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
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!selected.length"
                @click="fetchWeather"
                color="primary"
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
import dataCities from '@/data/cities'

export default {
  components: {
    CardCity
  },
  data: () => ({
    isLoading: false,
    selected: [],
    entries: [],
    dataCities,
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
      const idx = this.selected.indexOf(item.name)

      this.$store.commit('weather/removeWeather', item.name)
      if (idx >= 0) this.selected.splice(idx, 1)
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

<style lang="scss" scoped>
.widget {
  background: #3D7EAA;
  background: -webkit-linear-gradient(to right, #FFE47A, #3D7EAA);
  background: linear-gradient(to right, #FFE47A, #3D7EAA);
}
</style>

<template>
  <div class="news mt-3 mb-3">
    <div class="container">
      <h1 class="mb-3">Новини України</h1>
      <div class="row">
        <div
          v-for="(item, idx) in news"
          :key="idx"
          class="col-md-6 col-lg-4 mb-3"
        >
          <card-news :article="item" />
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <button
          class="btn btn-secondary btn-lg"
          @click="fetchNews"
        >
          Більше новин
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CardNews from '@/components/CardNews'

export default {
  name: 'news',
  components: {
    CardNews
  },
  mounted () {
    this.fetchNews()
  },
  computed: {
    news () {
      return this.$store.getters['news/getNews']
    }
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('news/fetchNews')
    }
  }
}
</script>

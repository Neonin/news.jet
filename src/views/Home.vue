<template>
  <div class="home mt-3">
    <div class="container">
      <h1 class="h1 mb-3">Home</h1>
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
        <router-link
          class="btn btn-secondary btn-lg"
          to="/news"
        >
          Усі новини
        </router-link>
      </div>
      <seo-text />
    </div>
  </div>
</template>

<script>
import CardNews from '@/components/CardNews'
import SeoText from '@/components/SeoText'

export default {
  name: 'home',
  components: {
    CardNews,
    SeoText
  },
  mounted () {
    this.fetchNews()
  },
  computed: {
    news () {
      return this.$store.getters['news/getNews'].slice(0, 3)
    }
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('news/fetchNews')
    }
  }
}
</script>

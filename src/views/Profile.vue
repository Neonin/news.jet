<template>
  <div class="profile mt-4 mb-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h1 class="display-4">Особистий кабінет!</h1>
            <hr class="my-4">
            <p>Тепер вам доступна функція збереження новин.</p>
          </div>
        </div>
      </div>
      <div v-if="true">
        <h1 class="h1 mb-3">Збереженні новини</h1>
        <div class="row">
          <div
            v-for="(item, idx) in saveNews"
            :key="idx"
            class="col-md-6 col-lg-4 mb-3"
          >
            <card-news :article="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardNews from '@/components/CardSaveNews'

export default {
  name: 'profile',
  components: {
    CardNews
  },
  computed: {
    saveNews () {
      return this.$store.getters['news/getSaveNews']
    },
    user () {
      return this.$store.getters['users/getUser']
    }
  },
  mounted () {
    const listNews = JSON.parse(localStorage.getItem('listNews'))

    this.$store.commit('news/importSaveNews', listNews)
  }
}
</script>

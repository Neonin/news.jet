<template>
  <div class="card">
    <div
      class="card__img"
      :style="{ backgroundImage: `url(${article.urlToImage})` }"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ getTitle }}
      </h5>
      <p class="card-text">
        {{ getDescription }}
      </p>
    </div>
    <div class="card-body card__actions">
      <button
        class="btn btn-danger"
        @click.prevent="remove"
      >
        Видалити
      </button>
      <a :href="article.url" class="btn btn-primary" target="_blank">
        Перейти
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    getTitle () {
      let sliced = this.article.title.slice(0, 40)

      if (sliced.length < this.article.title.length) {
        sliced += '...'
      }
      return sliced
    },
    getDescription () {
      let sliced = this.article.description.slice(0, 120)

      if (sliced.length < this.article.description.length) {
        sliced += '...'
      }
      return sliced
    }
  },
  methods: {
    remove () {
      let oldItems = JSON.parse(localStorage.getItem('listNews')) || []

      oldItems = oldItems.filter(item => item.title !== this.article.title)

      this.$store.commit('news/removeSaveNews', this.article)
      localStorage.setItem('listNews', JSON.stringify(oldItems))
    }
  }
}
</script>

<style lang="scss" scoped>
$card__shadow: 0 8px 20px rgba(0, 0, 0, .12), 0 8px 8px rgba(0, 0, 0, .08);

.card {
  height: 100%;
  box-shadow: $card__shadow;
  &__img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    height: 200px;
    background: #fafafa;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__actions {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>

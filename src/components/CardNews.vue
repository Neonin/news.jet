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
    <div class="card-body">
      <a :href="article.url" class="btn btn-secondary" target="_blank">Перейти</a>
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
}
</style>

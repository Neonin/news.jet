<template>
  <div id="app" class="wrapper">
    <div class="content">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" exact active-class="active" to="/">
              Головна
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/news">
              Новини
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/widget">
              Widget Погоди
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/profile">
              Особистий кабінет
            </router-link>
            <router-link v-if="!isLogin" class="nav-item nav-link" active-class="active" to="/login">
              Увійти
            </router-link>
            <a v-else class="nav-item nav-link" href="#" @click.prevent="logout">
              Вийти
            </a>
          </div>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
    <footer class="footer bg-dark">
      <hr class="hr">
      <p class="copy">
        {{ new Date().getFullYear() }} &copy; Mr.Neonin
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return this.$store.getters['user/getUser'] !== null
    }
  },
  mounted () {
    if (localStorage.getItem('jwt-token')) this.$store.commit('user/setUser')
  },
  methods: {
    logout () {
      localStorage.removeItem('jwt-token')
      this.$store.commit('user/clearUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .footer {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copy {
    color: #fff;
  }
  .hr {
    width: 76%;
    background-color: #fff;
  }
</style>

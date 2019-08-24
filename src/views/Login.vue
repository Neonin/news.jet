<template>
  <div class="mt-3 mb-3 container">
    <h1 class="h1 text-center">Увійти в особистий кабінет</h1>
    <form
      class="form-signin needs-validation"
      :class="[
        {'was-validated': isValidForm}
      ]"
      @submit.prevent="signIn"
    >
      <div class="form-group">
        <label for="login">
          Логін
        </label>
        <input
          type="text"
          id="login"
          class="form-control"
          placeholder="login"
          v-model="login"
        />
        <small
          class="invalid-feedback"
          :class="{'invalid-feedback--valid': passwordError}"
        >
          {{ loginError }}
        </small>
      </div>
      <!--  -->
      <div class="form-group">
        <label for="password">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="*******"
          v-model="password"
        />
        <small
          class="invalid-feedback"
          :class="{'invalid-feedback--valid': passwordError}"
        >
          {{ passwordError }}
        </small>
      </div>
      <!--  -->
      <button
        class="btn btn-primary btn-lg btn-block"
        :class="[
          {'btn-danger': loginError || passwordError},
          {'btn-success': isValidForm}
        ]"
        :disabled="loading"
        type="submit"
      >
        {{ loading ? 'Перевіряємо...' : 'Увійти' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    login: '',
    loginError: '',
    password: '',
    passwordError: '',
    loading: false,
    isValidForm: false
  }),
  created () {
    if (this.$route.query['loginError']) {
      alert('Будь ласка увійдіть в особистий кабінет!')
    }
  },
  methods: {
    signIn () {
      const { login, password } = this

      if (!login) this.loginError = 'Вкажіть будь ласка ваш логін.'
      if (!password) {
        this.passwordError = 'Ви не вказали пароль.'
      } else if (password.length < 4) {
        this.passwordError = 'Мінімум 4 символа.'
      }

      if (login && password) {
        this.loginError = ''
        this.passwordError = ''
        this.loading = true
        this.isValidForm = true
        this.$store.dispatch('user/signIn', { login, password })
          .then(() => {
            const token = true

            localStorage.setItem('jwt-token', token)
            this.$router.push({ name: 'profile' })
            this.loading = false
          })
          .catch(() => {
            alert('Ви вказали не вірний логін або пароль!')
            this.password = ''
            this.isValidForm = false
            this.loading = false
          })
      }
    }
  }
}
</script>

<style lang="scss">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.invalid-feedback {
  &--valid {
    display: block;
  }
}
</style>

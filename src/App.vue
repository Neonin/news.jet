<template>
  <div id="app" class="wrapper">
    <div class="content">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" exact active-class="active" to="/">
              Home
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/news">
              News
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/widget">
              Widget
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/profile">
              Profile
            </router-link>
            <router-link class="nav-item nav-link" active-class="active" to="/login">
              Login
            </router-link>
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

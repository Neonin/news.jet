<template>
  <div id="app" class="wrapper">
    <div class="content">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" :class="'active'" to="/"
              >Home</router-link
            >
            <router-link class="nav-item nav-link" to="/news">News</router-link>
            <router-link class="nav-item nav-link" to="/profile"
              >Profile</router-link
            >
            <router-link class="nav-item nav-link" to="/login"
              >Login</router-link
            >
          </div>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
    <footer class="footer bg-dark"></footer>
  </div>
</template>

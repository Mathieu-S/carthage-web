<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: $title-color;
}

#nav {
  margin: 30px;

  span {
    margin: 0 5px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

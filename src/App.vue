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

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Module } from "@vue-ioc/core";
import { UserRepository } from "@/libs/repositories/UserRepository";

@Module({
  providers: [UserRepository]
})
export default class App extends Vue {}
</script>

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

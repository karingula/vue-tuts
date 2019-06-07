<template>
  <div id="app">
    <navigation></navigation>
    <app-header></app-header>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    navigation: Navigation,
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

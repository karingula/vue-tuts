<template>
  <div id="app">
    <navigation></navigation>
    <portfolio></portfolio>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    navigation: Header,
    portfolio: Portfolio
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

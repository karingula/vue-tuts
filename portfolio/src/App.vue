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

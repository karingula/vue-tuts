<template>
  <div id="app">
    <navigation></navigation>
    <!-- <app-header></app-header> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
    navigation: Navigation,
    // appHeader: Header,
  }
}
</script>

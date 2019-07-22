<template>
  <div id="app">
    <navigation />
    <!-- <app-header></app-header> -->
    <router-view />
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import Navigation from "./components/Navigation.vue";
export default {
  name: "PortfolioApp",
  components: {
    navigation: Navigation
    // appHeader: Header,
  }
};
</script>

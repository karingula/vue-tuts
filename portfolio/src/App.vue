<template>
  <div id="app">
    <navigation></navigation>
    <!-- <app-header></app-header> -->
    <contact></contact>
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'app',
  components: {
    navigation: Navigation,
    // appHeader: Header,
    contact: Contact
  }
}
</script>

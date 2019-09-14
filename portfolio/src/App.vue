<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Home from './views/Home.vue';
import Contact from "@/components/Contact.vue";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/scss/styles.scss";

Vue.config.productionTip = false;

new Vue({
  router, //custom router configuration
  store, //custom store implementation
  render: h => h(App)
}).$mount("#app");

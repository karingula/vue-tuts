import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/scss/styles.scss";
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: "veeFields",
  // This is not required but avoids possible naming conflicts
  errorBagName: "veeErrors"
});
new Vue({
  router, //custom router configuration
  store, //custom store implementation
  render: h => h(App)
}).$mount("#app");

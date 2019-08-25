import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import VeeValidate from "vee-validate";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/scss/styles.scss";

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: "veeFields",
  // This is not required but avoids possible naming conflicts
  errorBagName: "veeErrors"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

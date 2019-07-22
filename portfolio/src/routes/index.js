import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "@/components/Contact";

Vue.use(VueRouter);
const routes = [
  {
    path: "/contact",
    name: "Contact Page",
    component: Contact
  }
];

export default new VueRouter({
  routes
});

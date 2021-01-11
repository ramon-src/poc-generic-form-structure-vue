import Vue from "vue";
import Vuelidate from "vuelidate";
import VejaPlugin from "../plugins/Veja";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VejaPlugin, {
  validationLib: "veevalidate",
  customInputs: {
    component: {},
    slots: {},
    types: { textarea: { tag: "input" } },
    props: { alohomora: { type: String } },
  },
});

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");

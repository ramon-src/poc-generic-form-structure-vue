import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";

import App from "./App.vue";
import router from "./router";

Vue.use(Vuelidate);
Vue.use(Vuex);

Vue.config.productionTip = false;

const form = {
  namespaced: true,
  state: {
    id: null,
    isEditing: false,
    fields: {},
    initialValues: {},
  },
  mutations: {
    setFields(state, fields) {
      state.fields = fields;
    },
    updateFieldValue(state, { name, value }) {
      state.fields[name] = value;
    },
    setInitialValues(state, initialValues) {
      state.initialValues = { ...initialValues };
    },
    setIsEditing(state, id) {
      state.isEditing = id ? true : false;
    },
    updateId(state, id) {
      state.id = id;
    },
  },
  actions: {
    setFields({ commit }, fields) {
      commit("setFields", fields);
    },
    updateFieldValue({ commit }, { name, value }) {
      commit("updateFieldValue", { name, value });
    },
    setInitialValues({ commit }, initialValues) {
      commit("setInitialValues", initialValues);
    },
    updateId({ commit }, id) {
      commit("updateId", id);
      commit("setIsEditing", id);
    },
  },
};

const store = new Vuex.Store({
  modules: {
    form,
  },
});

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");

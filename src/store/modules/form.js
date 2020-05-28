export default {
  namespaced: true,
  state: {
    id: null,
    isEditing: false,
    dirty: true,
    fields: {},
    initialValues: {},
    validations: {},
  },
  getters: {
    isCleanForm(state) {
      return !state.dirty;
    },
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
    setValidations(state, validations) {
      state.validations = validations;
    },
    setIsCleanForm(state, dirty) {
      state.dirty = dirty;
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
    setValidations({ commit }, validations) {
      commit("setValidations", validations);
      commit("setIsCleanForm", validations.$dirty);
    },
  },
};

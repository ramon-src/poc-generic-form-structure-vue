<template>
  <div v-if="!isLoading" id="form-container">
    <!-- <div v-show="isLoading" class="form-container-loading-overlay"></div> -->
    <div id="form-content">
      <component v-bind:is="components.Form" />
    </div>
    <div id="form-sidebar">
      <component
        v-bind:is="components.Sidebar"
        :invalid="$v.$invalid"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import makeForm from "./FormFactory";

export default {
  props: {
    type: String,
    id: String,
  },
  data() {
    return {
      validations: null,
      fetchData: {},
      onSubmit: null,
      components: null,
      getById: null,
      onEdit: null,
      isLoading: true,
    };
  },
  computed: {
    ...mapState({ fields: (state) => state.form.fields }),
    ...mapGetters({
      isCleanForm: "form/isCleanForm",
    }),
  },
  async created() {
    await this.startForm();
  },
  validations() {
    return { fields: { ...this.validations } };
  },
  watch: {
    async id() {
      await this.startForm();
    },
    fetchData(newFetches) {
      const options = { id: "" };
      Object.values(newFetches).forEach((fetch) => fetch(options));
    },
  },
  methods: {
    ...mapActions({
      setFields: "form/setFields",
      setInitialValues: "form/setInitialValues",
      updateId: "form/updateId",
      setValidations: "form/setValidations",
    }),
    async startForm() {
      this.isLoading = true;
      const {
        initialValues,
        getById,
        fetchData,
        validations,
        onSubmit,
        components,
        onEdit,
      } = makeForm(this.type);

      this.setInitialValues(initialValues);
      this.setFields(initialValues);
      this.updateId(this.id);
      this.setValidations(this.$v);

      this.fetchData = fetchData;
      this.validations = validations;
      this.getById = getById;
      this.onEdit = onEdit;
      this.components = components;

      this.onSubmit = () => {
        onSubmit({ data: { ...this.fields }, validator: this.$v });
      };

      if (this.id) {
        const response = await this.getById(this.id);
        const values = this.onEdit(response);
        this.setInitialValues({ ...initialValues, ...values });
        this.setFields({ ...initialValues, ...values });
        this.$v.$touch();
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.form-container-loading-overlay
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(3px);

#form-container
  display: flex
  align-items: row
  width: 100%;

#form-content
  width: 70%;
  margin-right: 10%
  margin-left: 15%

#form-sidebar
  width: 20%;
  margin-right: 5%
  padding: 15px;
  border-left: 1px solid black
</style>

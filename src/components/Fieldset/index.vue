<template>
  <div class="input-container">
    <label class="input-label" :for="name">{{ labelFormatted }}</label>
    <slot></slot>
    <validation
      class="input-validation"
      :name="name"
      :validations="validations"
      :isEditing="isEditing"
    ></validation>
  </div>
</template>

<script>
import validation from "./validation";

export default {
  components: { validation },
  props: {
    label: { type: String, default: "" },
    name: { type: String, required: true },
    validations: { type: Object, default: () => {} },
    defaultInput: { type: Boolean },
    required: { type: Boolean, default: false },
    isEditing: { type: Boolean, required: true },
  },
  computed: {
    labelFormatted() {
      const isRequired = this.required ? " *" : "";
      return this.label + isRequired;
    },
  },
};
</script>

<style lang="stylus" scoped>
.input-container
  display: flex
  align-items: flex-start
  flex-direction: column
  height: auto
  width: 100%

.input-container input
    height: 30px
    width: 100%
    border-radius: 2px
    border-style: groove

.input-label
  display: flex
  align-content: flex-start
  height: 18px
  width: 100%
  margin-bottom: 4px

.input-validation
  display: flex
  align-content: flex-start
  height: 18px
  width: 100%
  margin-top: 4px

  color: red
</style>

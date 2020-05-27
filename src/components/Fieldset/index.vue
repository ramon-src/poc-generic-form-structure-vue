<template>
  <div class="input-container">
    <label class="input-label" :for="name">{{ labelFormatted }}</label>
    <slot></slot>
    <div class="input-validation">{{ validations }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "" },
    name: { type: String, required: true },
    validations: { type: String, default: "" },
    defaultInput: { type: Boolean },
    required: { type: Boolean, default: false },
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

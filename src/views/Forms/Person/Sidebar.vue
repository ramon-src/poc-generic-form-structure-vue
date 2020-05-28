<template>
  <div><button @click="submit" :disabled="invalid">Submit</button></div>
</template>

<script>
export default {
  props: {
    invalid: { type: Boolean, default: true },
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

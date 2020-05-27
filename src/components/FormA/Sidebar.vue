<template>
  <div><button @click="submit">Submit</button></div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style></style>

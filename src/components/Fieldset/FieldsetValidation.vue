<template>
  <div>{{ validationMessage }}</div>
</template>

<script>
import { isFunction } from "@/helpers/checkers";
import dictionary from "@/views/Forms/properties/dictionary";

export default {
  props: {
    name: { type: String, required: true },
    isEditing: { type: Boolean, required: true },
    validations: { type: Object, default: () => {} },
  },
  computed: {
    validationMessage() {
      if (!this.validations) return "";
      if (!this.validations.$dirty) {
        return "";
      }
      const paramsKeys = Object.keys(this.validations.$params);
      const validations = Object.entries(this.validations)
        .filter(([key, value]) => paramsKeys.includes(key) && !value)
        .map(([key]) => {
          const dic = dictionary.pt.validations[key];
          if (isFunction(dic)) {
            return dic(this.validations.$params[key]);
          }
          return dic;
        });
      return validations[0];
    },
  },
};
</script>

import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { customMask } from "./mask";
import inputTypes from "./types";
import slots from "./slots";
import selectProps from "./slots/select/props";
import Fieldset from "../Fieldset/Fieldset";

console.log("props", Vue.customInputs);

export default {
  props: {
    label: { type: String },
    name: { type: String, required: true },
    type: { type: String, default: "alphanumeric" },
    masked: { type: Boolean, default: false },
    placeholder: { type: String, default: "Digite aqui" },
    required: { type: Boolean, default: false },

    maxDigits: { type: Number },

    ...selectProps,
    // ...Vue.customInputs.props,
  },
  computed: {
    ...mapState({
      fields: (state) => state.form.fields,
      isEditing: (state) => state.form.isEditing,
      validations: (state) => state.form.validations,
    }),
  },
  methods: {
    ...mapActions({
      updateFieldValue: "form/updateFieldValue",
    }),
  },
  render: function(createElement) {
    console.log(this.customInputs);

    var self = this;

    const { tag, mask = "", tokens } = inputTypes[this.type];

    const maskOptions = {
      maxDigits: this.maxDigits,
    };

    console.log(this.$formConfig.validationLib);

    const fieldValidator = this.validations.fields[this.name];

    const fieldset = (child) => {
      return createElement(
        Fieldset,
        {
          props: {
            name: this.name,
            label: this.label,
            required: this.required,
            validations: fieldValidator,
            isEditing: this.isEditing,
          },
        },
        [child]
      );
    };

    const input = createElement(
      tag,
      {
        props: {
          mask: customMask(mask, maskOptions),
          tokens,
          masked: this.masked,
          value: self.value || this.fields[this.name],
        },
        domProps: {
          value: self.value || this.fields[this.name],
          placeholder: this.placeholder,
        },
        class: {
          ["custom-input"]: true,
        },
        on: {
          input: function(event) {
            const value =
              typeof event === "object" ? event.target.value : event;
            self.$emit("input", value);

            self.updateFieldValue({
              name: self.name,
              value,
            });

            if (fieldValidator) fieldValidator.$touch();
          },
        },
      },
      [
        createElement(slots, {
          props: {
            ...this.$props,
          },
        }),
      ]
    );

    return fieldset(input);
  },
};

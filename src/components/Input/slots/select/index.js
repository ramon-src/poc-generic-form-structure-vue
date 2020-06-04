import Vue from "vue";
import props from "./props";
import { Option } from "element-ui";

Vue.use(Option);

export default {
  props,
  render(createElement) {
    return createElement(
      "div",
      { class: ["custom-input-select-options"] },
      this.options.map((item, index) => {
        return createElement("el-option", {
          props: {
            key: index,
            label: item[this.optionLabel] || item,
            value: item[this.optionValue] || item,
            disabled: item?.disabled || false,
          },
        });
      })
    );
  },
};

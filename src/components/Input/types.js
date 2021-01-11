// import Vue from "vue";
import { TheMask } from "vue-the-mask";
import { Select } from "element-ui";
import { getDynamicDigits } from "./mask";

// console.log(Vue.config);

export default {
  select: { tag: Select },
  textarea: { tag: "textarea" },
  cpf: { tag: TheMask, mask: "###.###.###-##" },
  cnpj: { tag: TheMask, mask: "##.###.###/####-##" },
  number: { tag: TheMask, mask: getDynamicDigits },
  age: { tag: TheMask, mask: "0-100" },
  alphanumeric: { tag: "input" },
  zip: { tag: TheMask, mask: "#####-###" },
  // ...Vue.config.customInput.types,
};

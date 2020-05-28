import { TheMask } from "vue-the-mask";
import { getDynamicDigits } from "./mask";

export default {
  select: { tag: "select" },
  textarea: { tag: "textarea" },
  cpf: { tag: TheMask, mask: "###.###.###-##" },
  cnpj: { tag: TheMask, mask: "##.###.###/####-##" },
  number: { tag: TheMask, mask: getDynamicDigits },
  age: { tag: TheMask, mask: "0-100" },
  alphanumeric: { tag: "input" },
  zip: { tag: TheMask, mask: "#####-###" },
};

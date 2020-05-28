import {
  alpha,
  numeric,
  required,
  minLength,
  between,
} from "vuelidate/lib/validators";
import commonValidations from "~/views/Forms/properties/defaultProperties/validations";

export default {
  ...commonValidations,
  name: {
    alpha,
    required,
    minLength: minLength(4),
  },
  secondName: {
    alpha,
    required,
    minLength: minLength(4),
  },
  age: {
    numeric,
    required,
    between: between(20, 30),
  },
  cpf: {
    required,
  },
};

import formA from "./properties/formA";

export const FORMS = {
  FORM_A: "formA",
};

const getForm = {
  [FORMS.FORM_A]: formA,
};

export default (formType) => getForm[formType];

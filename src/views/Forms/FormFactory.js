import Person from "./Person/properties";

export const FORMS = {
  PERSON: "Peron",
};

FORMS.PERSON; // "Person"

const getForm = {
  [FORMS.PERSON]: Person,
  confirmButton: {
    component: Button,
    label: "label",
    action: () => {},
    validator: (value) => {},
  },
};

export default (formType) => getForm[formType];

import Person from "./Person/properties";

export const FORMS = {
  PERSON: "Person",
};

const getForm = {
  [FORMS.PERSON]: Person,
};

export default (formType) => getForm[formType];

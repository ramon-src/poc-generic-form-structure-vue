import { formatOnSubmit } from "./formatters";

export default ({ data, validator }) => {
  const newData = formatOnSubmit(data);
  validator.$touch();
  alert("Form invalid? " + validator.$invalid);
  alert("Data formatted to backend: \n" + JSON.stringify(newData));
};

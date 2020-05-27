export function formatOnSubmit(data) {
  const secondName = data.secondName;
  delete data.secondName;

  return {
    ...data,
    name: `${data.name} - ${secondName}`,
  };
}

export function formatOnEdit(data) {
  const [name, secondName] = data.name.split(" - ");
  return {
    ...data,
    name,
    secondName,
  };
}

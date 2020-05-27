export const getDataById = (id) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ id, name: "paula - thais", age: 22, bio: "" });
    }, 1000)
  );
};

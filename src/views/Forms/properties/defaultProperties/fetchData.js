export const getDataById = (id) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (id == 1)
        resolve({
          id,
          name: "Paula - Thais",
          age: 25,
          cpf: "030.065.270-58",
          bio: "",
        });
      if (id == 2)
        resolve({ id, name: "Rodnei - Silva", age: 25, bio: "teste" });
    }, 20)
  );
};

export const getDataById = (id) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (id == 1)
        resolve({
          id,
          name: "Paula - Thais",
          age: 22,
          cpf: "030.065.270-58",
          bio: "",
        });
      if (id == 2)
        resolve({ id, name: "Rodnei - Silva", age: 10, bio: "teste" });
    }, 1000)
  );
};

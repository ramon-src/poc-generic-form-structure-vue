export default {
  pt: {
    validations: {
      alpha: "O campo não aceita números ou caracteres especiais",
      required: "O campo é obrigatório",
      minLength: ({ min }) => `O campo aceita no mínimo ${min}`,
      between: ({ min, max }) =>
        `O campo aceita no mínimo ${min} e máximo ${max}`,
      numeric: "O campo aceita números",
    },
  },
};

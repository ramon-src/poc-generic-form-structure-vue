const VejaPlugin = {
  install(Vue, options) {
    const { validationLib, customInputs } = options;
    Vue.customInputs = customInputs;
    Vue.prototype.$formConfig = { validationLib };
  },
};
// const install = (Vue, options) => {
//   const { validationLib, customInputs } = options;
//   // console.log(Object.values(customInputs).map(({ props }) => props)[0]);

//   Vue.config.customInputs = customInputs;
//   // Object.values(input).map(
//   //   ({ props }) => props
//   // )[0];
//   Vue.prototype.$formConfig = { validationLib };
// };

export default VejaPlugin;

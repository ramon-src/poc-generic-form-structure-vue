export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

export const isObject = (objectToCheck) =>
  typeof objectToCheck === "object" && objectToCheck !== null;

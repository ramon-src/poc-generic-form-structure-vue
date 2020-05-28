import { isFunction } from "@/helpers/checkers";

export const getDynamicDigits = ({ maxDigits = null }) =>
  Array.apply(null, { length: maxDigits || 5 })
    .map(Number.call, () => "#")
    .join("");

export const customMask = (customMask, options) =>
  isFunction(customMask) ? customMask(options) : customMask;

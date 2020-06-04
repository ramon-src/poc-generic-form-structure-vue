import select from "./select";

const types = {
  select,
};

export default {
  functional: true,
  render(createElement, context) {
    const { children } = context;
    const { type } = context.props;

    if (children) return children;

    return createElement(types[type] || children, context);
  },
};

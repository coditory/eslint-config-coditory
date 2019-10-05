export const singleParam = param => param + 1;

export const singleParamCallback = () => {
  const listeners = [];
  listeners.add(param => param + 1);
};

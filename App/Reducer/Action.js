export const AddCart = (item) => {
  return {
    type: "AddCart",
    payload: item,
  };
};

export const addQuantityHandler = (item) => {
  return {
    type: "addQuantityHandler",
    payload: item,
  };
};

export const subQuantityHandler = (item) => {
  return {
    type: "subQuantityHandler",
    payload: item,
  };
};

export const CheckOut = () => {
  return {
    type: "CheckOut",
  };
};

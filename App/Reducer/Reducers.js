let productObject = [];
const initial = [];
export const Reducers = (state = initial, action) => {
  switch (action.type) {
    case "AddCart":
      // console.log(action.payload);
      const temp = [...state];
      productObject = [];
      let check = 0;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i]?.id === action?.payload?.id) {
          let count = temp[i]?.count + 1;

          const obj = { ...temp[i], count: count };
          productObject.push(obj);
          check = 1;
        } else {
          const obj = { ...temp[i] };
          productObject.push(obj);
        }
      }
      if (check === 0) {
        productObject.push({ ...action.payload, count: 1 });
      }
      return [...productObject];

    case "addQuantityHandler":
      const temp1 = [...state];
      productObject = [];

      for (let i = 0; i < temp1.length; i++) {
        if (temp1[i]?.id === action?.payload?.id) {
          let count = temp1[i]?.count + 1;

          const obj = { ...temp1[i], count: count };
          productObject.push(obj);
          check = 1;
        } else {
          productObject.push(temp1[i]);
        }
      }
      return [...productObject];

    case "subQuantityHandler":
      const temp2 = [...state];
      productObject = [];

      for (let i = 0; i < temp2.length; i++) {
        if (temp2[i]?.id === action?.payload?.id) {
          let count = temp2[i]?.count - 1;

          const obj = { ...temp2[i], count: count };
          productObject.push(obj);
          check = 1;
        } else {
          productObject.push(temp2[i]);
        }
      }
      return [...productObject];

    case "CheckOut":
        // console.log('hello');
      return [];

    default:
      return state;
  }
};

//함수
export const cartList = (state = [], action) => {
  switch (action.type) {
    case "ADD_PIN":
      return [...state, action.payload];
    case "DELETE_PIN":
      return [...state, action.payload];
    default:
      return state;
  }
};

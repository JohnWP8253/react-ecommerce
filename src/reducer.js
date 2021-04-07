export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  // setting the initial amount to 0 and tallies up all of the items and their price
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;

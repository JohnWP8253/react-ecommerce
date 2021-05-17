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
    case "REMOVE_FROM_BASKET":
      const i = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (i >= 0) {
        // cutting the items in the basket by only one index
        newBasket.splice(i, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket
      }
    default:
      return state;
  }
};

export default reducer;

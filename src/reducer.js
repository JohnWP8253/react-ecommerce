export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
    console.log(action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
// Import statements for the dataLayer
import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

// Prepares the dataLayer
export const StateContext = createContext();
// Wrap the app and provide the data layer to all components in the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// code to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

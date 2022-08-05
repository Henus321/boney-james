import { createContext, useReducer } from 'react';

import { reducer } from './collection.reducer';

export const CollectionContext = createContext();

const initialState = {
  collections: [],
  cart: [],
};

export const CollectionProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setItems = (data) => {
    dispatch({
      type: 'SET_ITEMS',
      payload: data,
    });
  };

  value.addToCart = (clickedItem, size) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { clickedItem, size },
    });
  };

  value.deleteFromCart = (clickedItem) => {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: { clickedItem },
    });
  };

  value.changeQuantity = (clickedItem, positiveOrNegativeOne) => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: { clickedItem, positiveOrNegativeOne },
    });
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};

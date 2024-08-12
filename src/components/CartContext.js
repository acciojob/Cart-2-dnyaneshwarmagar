import React, { createContext, useReducer, useContext } from 'react';

// Initial cart items
const initialState = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1,
  },
  {
    id: 2,
    title: "Google Pixel",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1,
  },
];

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    case 'DECREMENT':
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount !== 0);
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

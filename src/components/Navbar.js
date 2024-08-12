import React from 'react';
import { useCart } from './CartContext';

const Navbar = () => {
  const { state } = useCart();
  const totalItems = state.reduce((total, item) => total + item.amount, 0);

  return (
    <nav>
      <h1>useReducer</h1>
      <div style={{display:"flex",justifyContent:"space-between",maxWidth:"300px",backgroundColor:"teal",color:"red",padding:"10px"}}>
        <span>Cart</span>
        <span id="nav-cart-item-count">{totalItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;

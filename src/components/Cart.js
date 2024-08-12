import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const totalAmount = state.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2);

  if (state.length === 0) {
    return <h2>Cart is currently empty</h2>;
  }

  return (
    <div>
      <ul id="cart-items-list">
        {state.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p id={`cart-item-price-${item.id}`}>${item.price}</p>
            <div>
              <button
                id={`increment-btn-${item.id}`}
                onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
              >
                +
              </button>
              <span id="cart-amount-${item.id}">{item.amount}</span>
              <button
                id={`decrement-btn-${item.id}`}
                onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}
              >
                -
              </button>
            </div>
            <button id={`cart-item-remove-${item.id}`} onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2 id="cart-total-amount">Total: ${totalAmount}</h2>
        <button id="clear-all-cart" onClick={() => dispatch({ type: 'CLEAR' })}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;

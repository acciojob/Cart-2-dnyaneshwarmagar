import React from 'react';
import { CartProvider } from './CartContext';
import Navbar from './Navbar';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <img src={item.image} alt={item.name} width="80" />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                {item.quantity}
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>🗑 Delete</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button>Checkout (Coming Soon)</button>
          <br />
          <Link to="/products">Continue Shopping</Link>
        </>
      )}
    </div>
  );
}

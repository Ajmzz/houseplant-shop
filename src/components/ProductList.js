import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductList() {
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((p) => {
          const inCart = cartItems.find((item) => item.id === p.id);
          return (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
              <img src={p.image} alt={p.name} width="150" height="150" />
              <h4>{p.name}</h4>
              <p>${p.price}</p>
              <button disabled={!!inCart} onClick={() => dispatch(addToCart(p))}>
                {inCart ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

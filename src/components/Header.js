import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header style={{ background: '#2e8b57', color: 'white', padding: '10px' }}>
      <h2>Houseplant Shop</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

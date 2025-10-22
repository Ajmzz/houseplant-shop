import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundImage: 'url(https://via.placeholder.com/800x400)',
      backgroundSize: 'cover',
      height: '100vh'
    }}>
      <h1>Welcome to Houseplant Shop</h1>
      <p>Your home for beautiful and easy-to-care indoor plants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '18px' }}>Get Started</button>
      </Link>
    </div>
  );
}

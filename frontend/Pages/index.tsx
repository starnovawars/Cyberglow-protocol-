import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      background: '#000',
      color: '#0ff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>Cyberglow Protocol</h1>
      <p>Modular DeFi Suite on IOTA L1</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link href="/swap">
          <a style={linkStyle}>Swap</a>
        </Link>
        <Link href="/lending">
          <a style={linkStyle}>Lending</a>
        </Link>
      </nav>
    </div>
  );
}

const linkStyle = {
  margin: '0 1rem',
  padding: '1rem 2rem',
  border: '1px solid #0ff',
  textDecoration: 'none',
  color: '#0ff',
  borderRadius: '8px'
};

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', textAlign: 'center', paddingTop: '5rem' }}>
      <h1>Welcome to Cyberglow Protocol</h1>
      <p>Modular DeFi Suite on IOTA L1</p>
      <Link href="/swap">
        <button style={{ padding: '1rem 2rem', margin: '1rem', border: '1px solid #0ff', background: 'transparent', color: '#0ff' }}>
          Go to Swap
        </button>
      </Link>
    </div>
  );
}

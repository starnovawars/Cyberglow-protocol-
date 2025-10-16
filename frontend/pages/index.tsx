import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cyberglow Protocol</title>
        <meta name="description" content="Modular DeFi suite on IOTA L1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        backgroundColor: '#000',
        color: '#0ff',
        minHeight: '100vh',
        padding: '4rem',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>Cyberglow Protocol</h1>
        <p>Modular DeFi suite on IOTA L1</p>
      </main>
    </>
  );
}


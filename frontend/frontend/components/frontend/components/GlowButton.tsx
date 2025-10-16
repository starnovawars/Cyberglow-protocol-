export default function GlowButton({ label }: { label: string }) {
  return (
    <button style={{
      padding: '1rem 2rem',
      margin: '1rem',
      border: '1px solid #0ff',
      background: 'transparent',
      color: '#0ff',
      boxShadow: '0 0 10px #0ff',
      borderRadius: '8px',
      cursor: 'pointer'
    }}>
      {label}
    </button>
  );
}


import { useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      zIndex: 1000,
      transition: 'opacity 0.5s ease-in-out',
      color: 'white',
      fontFamily: '"Inter", sans-serif'
    }}>
      <div style={{
        width: '200px',
        height: '2px',
        background: '#333',
        marginBottom: '20px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#007bff',
          boxShadow: '0 0 10px #007bff',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <p style={{ fontSize: '14px', letterSpacing: '2px' }}>
        CARREGANDO {Math.round(progress)}%
      </p>
    </div>
  );
}
import { Canvas } from "@react-three/fiber";
import { Cena3D } from "./components/Cena3D";
import UI from "./components/UI";

function App() {
  return (
    <div style={{ 
      position: "fixed", // Fixed garante que ele não saia do lugar
      top: 0,
      left: 0,
      width: "100vw", 
      height: "100vh", 
      backgroundColor: "#050505",
      overflow: "hidden"
    }}>
      <UI />
      
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 45 }}
        gl={{ antialias: true }}
        // Isso garante que o Canvas ocupe todo o espaço do container pai
        style={{ width: '100%', height: '100%' }} 
      >
        <Cena3D />
      </Canvas>
    </div>
  );
}

export default App;
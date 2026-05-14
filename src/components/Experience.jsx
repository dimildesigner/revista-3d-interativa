import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <OrbitControls 
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
      
      {/* Luz simples sem sombras pesadas para testar estabilidade */}
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      
      <Book />

      {/* Sombra de contato leve */}
      <ContactShadows 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={1.5} 
        resolution={256} 
        color="#000000"
      />
    </>
  );
};
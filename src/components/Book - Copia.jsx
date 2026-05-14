import { useTexture, useCursor } from "@react-three/drei";
import { useState, useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PAGE_WIDTH = 2;
const PAGE_HEIGHT = 3;
const SEGMENTS = 30;

const Page = ({ frontTexture, backTexture, opened, index, ...props }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const geometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(PAGE_WIDTH, PAGE_HEIGHT, 0.01, SEGMENTS, 1, 1);
    geo.translate(PAGE_WIDTH / 2, 0, 0); 
    return geo;
  }, []);

  useFrame(() => {
    if (!group.current) return;
    const targetRotation = opened ? -Math.PI : 0;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation, 0.1);

    const foldIntensity = Math.sin(group.current.rotation.y) * 0.4;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      if (x > 0) {
        const bend = Math.sin((x / PAGE_WIDTH) * Math.PI) * foldIntensity;
        position.setZ(i, bend);
      }
    }
    position.needsUpdate = true;
  });

  return (
    <group ref={group} {...props} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} dispose={null}>
      <mesh geometry={geometry} castShadow>
        <meshStandardMaterial attach="material-0" color="white" />
        <meshStandardMaterial attach="material-1" color="white" />
        <meshStandardMaterial attach="material-2" color="white" />
        <meshStandardMaterial attach="material-3" color="white" />
        <meshStandardMaterial attach="material-4" map={frontTexture} roughness={0.8} />
        <meshStandardMaterial attach="material-5" map={backTexture} roughness={0.8} />
      </mesh>
    </group>
  );
};

export const Book = () => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const textures = useTexture([
    "/01.jpg", "/02.jpg", "/03.jpg", "/04.jpg", "/05.jpg", "/06.jpg",
    "/07.jpg", "/08.jpg", "/09.jpg", "/10.jpg", "/11.jpg", "/12.jpg",
  ]);

  useEffect(() => {
    textures.forEach(t => {
      t.flipY = true; 
      t.colorSpace = THREE.SRGBColorSpace;
    });
  }, [textures]);

  const sheets = useMemo(() => [
    { f: textures[0], b: textures[1] }, { f: textures[2], b: textures[3] },
    { f: textures[4], b: textures[5] }, { f: textures[6], b: textures[7] },
    { f: textures[8], b: textures[9] }, { f: textures[10], b: textures[11] },
  ], [textures]);

  return (
    <group position={[0, 0, 0]}>
      {sheets.map((sheet, index) => (
        <Page 
          key={index} 
          frontTexture={sheet.f}
          backTexture={sheet.b}
          opened={index < pageIndex}
          position={[0, 0, index < pageIndex ? index * 0.02 : (sheets.length - index) * 0.02]} 
          onClick={(e) => {
            e.stopPropagation();
            if (pageIndex < sheets.length) setPageIndex(pageIndex + 1);
          }}
          onPointerDown={(e) => {
            if (e.button === 2) {
              e.stopPropagation();
              if (pageIndex > 0) setPageIndex(pageIndex - 1);
            }
          }}
        />
      ))}
    </group>
  );
};
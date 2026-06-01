import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Torus, Float } from '@react-three/drei';
import * as THREE from 'three';

// Il componente Mesh vero e proprio
const LiquidBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  // Animiamo la distorsione e la rotazione
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      const material = meshRef.current.material as any;
      // Distorsione molto sottile per mantenere l'eleganza dell'anello
      const targetDistort = hovered ? 0.35 : 0.15; 
      const targetSpeed = hovered ? 4 : 1.5; 
      
      material.distort = THREE.MathUtils.lerp(material.distort, targetDistort, 0.05);
      material.speed = THREE.MathUtils.lerp(material.speed, targetSpeed, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Torus 
        ref={meshRef} 
        args={[1.1, 0.35, 64, 128]} // Ridimensionato: raggio più piccolo e tubo più sottile
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        rotation={[1.2, 0.3, 0]} // Inclinato per mostrare chiaramente che è un anello
      >
        <MeshDistortMaterial
          color="#050505" // Nero ultra-profondo
          emissive="#d4af37" 
          emissiveIntensity={0.05} // Bagliore oro impercettibile, pura eleganza
          metalness={1} // Massima riflessione come uno specchio liquido
          roughness={0.15} // Quasi liscio, riflette le luci in modo nitido
          clearcoat={1} 
          clearcoatRoughness={0.05}
          distort={0.15} 
          speed={1.5} 
        />
      </Torus>
    </Float>
  );
};

// Il Canvas Wrapper
export const HeroCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-visible">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 35 }}
        dpr={[1, 1.5]} // Performance: limita la pixel density su schermi Retina per i 60 FPS
      >
        {/* Illuminazione estremamente controllata per "dipingere" il metallo nero */}
        <ambientLight intensity={0.1} />
        
        {/* Luce chiave: crea il riflesso dorato netto sul bordo dell'anello */}
        <directionalLight position={[3, 5, 2]} intensity={4} color="#d4af37" />
        
        {/* Luce di taglio (rim light) azzurrata per staccarlo dallo sfondo nero */}
        <spotLight position={[-5, -5, -2]} intensity={3} color="#222233" angle={0.5} penumbra={1} />
        
        <LiquidBlob />
      </Canvas>
    </div>
  );
};

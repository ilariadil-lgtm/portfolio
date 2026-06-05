import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Il "Mare di Dati" - Un piano topografico wireframe che ondeggia
const Terrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  
  useFrame((state) => {
    if (!geomRef.current) return;
    const time = state.clock.getElapsedTime();
    const position = geomRef.current.attributes.position;
    
    // Animazione di tutti i vertici per creare morbide onde topografiche
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      // Equazione d'onda che unisce due frequenze per un movimento organico e complesso
      const z = Math.sin(x * 0.4 + time * 1.0) * Math.cos(y * 0.4 + time * 1.0) * 2.5;
      position.setZ(i, z);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, -10]}>
      {/* Geometria molto larga e suddivisa per permettere onde morbide */}
      <planeGeometry ref={geomRef} args={[100, 100, 64, 64]} />
      {/* Wireframe elegante per un look altamente tecnico ma artistico */}
      <meshBasicMaterial color="#d4af37" wireframe={true} transparent opacity={0.35} />
    </mesh>
  );
};

// Sistema Particellare: Dati fluttuanti in zero gravità (Orali piccoli e rotondi)
const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 800;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i=0; i<particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, [particlesCount]);

  // Genera una texture circolare per far sì che le particelle non siano quadratini
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.arc(16, 16, 16, 0, Math.PI * 2);
      context.fillStyle = '#ffffff';
      context.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        map={circleTexture}
        color="#ffffff" 
        size={0.03} // Particelle molto più piccole 
        transparent 
        opacity={0.4} 
        sizeAttenuation={true} 
        depthWrite={false} // Evita glitch grafici quando si sovrappongono
      />
    </points>
  );
};

// Il Canvas Wrapper (che ora funge da vero sfondo dell'intera Hero)
export const HeroCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-visible">
      <Canvas camera={{ position: [-2, 2, 8], fov: 45 }}>
        {/* Nebbia volumetrica per far sfumare dolcemente la griglia in lontananza e ai bordi */}
        <fog attach="fog" args={['#080808', 2, 25]} />
        
        <Terrain />
        <Particles />
      </Canvas>
    </div>
  );
};

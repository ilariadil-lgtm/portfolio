import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;

const Terrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const segments = isMobileDevice ? 24 : 64;

  useFrame((state) => {
    if (!geomRef.current) return;
    const time = state.clock.getElapsedTime();

    // Awwwards Scrollytelling: leggiamo lo scroll e usiamolo per alterare lo spazio 3D
    const scrollY = window.scrollY;
    const scrollFactor = scrollY * 0.002;

    const position = geomRef.current.attributes.position;

    // Animazione dei vertici: l'ampiezza e la fase delle onde aumentano scendendo
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z =
        Math.sin(x * 0.4 + time * 1.0 + scrollFactor) *
        Math.cos(y * 0.4 + time * 1.0) *
        (2.5 + scrollY * 0.001); // Le onde si alzano scendendo
      position.setZ(i, z);
    }
    position.needsUpdate = true;

    // Inclinazione reattiva allo scroll
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2.2 - scrollY * 0.0003;
      meshRef.current.position.y = -2 - scrollY * 0.003;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, -2, -10]}
    >
      <planeGeometry ref={geomRef} args={[100, 100, segments, segments]} />
      <meshBasicMaterial
        color="#d4af37"
        wireframe={true}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
};

// Genera una texture circolare per far sì che le particelle non siano quadratini
const createCircleTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.arc(16, 16, 16, 0, Math.PI * 2);
    context.fillStyle = "#ffffff";
    context.fill();
  }
  return new THREE.CanvasTexture(canvas);
};

const defaultCircleTexture = createCircleTexture();

const particlesCount = isMobileDevice ? 200 : 800;

// Sistema Particellare: Dati fluttuanti in zero gravità (Orali piccoli e rotondi)
const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  const circleTexture = defaultCircleTexture;

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
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
    <div className="w-full h-full absolute inset-0 z-0 overflow-visible pointer-events-none">
      <Canvas dpr={[1, 1.5]} camera={{ position: [-2, 2, 8], fov: 45 }}>
        {/* Nebbia volumetrica per far sfumare dolcemente la griglia in lontananza e ai bordi */}
        <fog attach="fog" args={["#080808", 2, 25]} />

        <Terrain />
        <Particles />
      </Canvas>
    </div>
  );
};

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, RoundedBox, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingPaper = ({ position, rotation, color, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], color: string, scale?: number }) => {
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.5} 
      floatingRange={[-0.05, 0.05]}
    >
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[3.2, 4.2, 0.05]} radius={0.1} smoothness={4} castShadow receiveShadow>
             <meshStandardMaterial 
                color={color} 
                roughness={0.45} 
                metalness={0.05}
                envMapIntensity={1.2}
             />
        </RoundedBox>
      </group>
    </Float>
  );
};

const SceneContent = () => {
    // Gentle rotation of the whole group
    const groupRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if (groupRef.current) {
             groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.08;
             // Add slight tilt based on mouse position (optional, but keeping it simple/subtle for now)
        }
    });

    return (
        <group ref={groupRef} rotation={[0, -0.3, 0]}>
            {/* Back Paper */}
            <FloatingPaper 
                position={[-0.8, 0.4, -0.6]} 
                rotation={[0, 0, -0.1]} 
                color="#f1f5f9" 
            />
            {/* Middle Paper */}
            <FloatingPaper 
                position={[0.6, -0.3, -0.3]} 
                rotation={[0, 0, 0.05]} 
                color="#f8fafc" 
            />
            {/* Front Paper (Hero) */}
            <FloatingPaper 
                position={[0, 0, 0.2]} 
                rotation={[0, 0, 0]} 
                color="#ffffff" 
            />
        </group>
    );
}

const PaperScene: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        
        {/* Base Ambient - reduced for contrast */}
        <ambientLight intensity={0.4} />
        
        {/* Main Key Light - Warm tint to mimic sunlight/studio warm light */}
        <spotLight 
            position={[10, 15, 10]} 
            angle={0.25} 
            penumbra={1} 
            intensity={1} 
            color="#fff7ed" 
            castShadow 
            shadow-bias={-0.0001}
            shadow-mapSize={[2048, 2048]}
        />
        
        {/* Fill/Rim Light - Cool tint to contrast the warm key light (Classic studio setup) */}
        <pointLight position={[-10, 5, -10]} intensity={0.8} color="#e0e7ff" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#fefce8" />

        <Suspense fallback={null}>
            <SceneContent />
            <ContactShadows 
                position={[0, -3, 0]} 
                opacity={0.2} 
                scale={20} 
                blur={4} 
                far={4.5} 
                color="#1e293b"
            />
            {/* 
              Using 'city' preset with high blur creates complex, realistic reflections 
              that look more premium than the sterile 'studio' preset.
            */}
            <Environment preset="city" blur={0.8} background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PaperScene;
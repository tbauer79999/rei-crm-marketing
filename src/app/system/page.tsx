"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Simple Neural Node with ripple effect
import * as THREE from "three";

// ✅ Top of file, right under imports

type NeuralNodeProps = {
  position: [number, number, number];
  color: string;
  label: string;
  id: string;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
  isHovered: boolean;
  anyNodeHovered: boolean;
};

type ConnectionLineProps = {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
};



function NeuralNode({
  position,
  color,
  label,
  id,
  onHover,
  onClick,
  isHovered,
  anyNodeHovered,
}: NeuralNodeProps) {

  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const rippleRef = useRef<THREE.Mesh>(null);


  
    useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15 + 1;
      meshRef.current.scale.setScalar(isHovered ? 1.8 : pulse);
    }

    if (glowRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.2 + 1;
      glowRef.current.scale.setScalar(isHovered ? 3.5 : pulse * 2.5);
    }

    // Ripple effect on hover
    if (rippleRef.current && isHovered) {
      const rippleTime = (state.clock.getElapsedTime() * 1.5) % 1;
      rippleRef.current.scale.setScalar(1 + rippleTime * 2);

      const material = rippleRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.6 * (1 - rippleTime);
    }
  }); // ✅ this line was missing

  // Dim this node if another node is hovered
  const dimmed = anyNodeHovered && !isHovered;

  return (
    <group position={position}>
      {/* Ripple effect */}
      {isHovered && (
        <mesh ref={rippleRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={0.6}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Large glow */}
      <mesh 
        ref={glowRef}
        onPointerOver={() => onHover(id)}
        onPointerOut={() => onHover(null)}
        onClick={() => onClick(id)}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={dimmed ? 0.1 : (isHovered ? 0.5 : 0.25)}
        />
      </mesh>

      {/* Bright core */}
      <mesh 
        ref={meshRef}
        onPointerOver={() => onHover(id)}
        onPointerOut={() => onHover(null)}
        onClick={() => onClick(id)}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial 
          color={color}
          opacity={dimmed ? 0.3 : 1}
          transparent={dimmed}
        />
      </mesh>
    </group>
  );
}


function ConnectionLine({ start, end, color = "#818cf8" }: ConnectionLineProps) {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (lineRef.current) {
      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.4 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
    if (glowRef.current) {
      const t = (state.clock.getElapsedTime() * 0.3) % 1;
      const x = start[0] + (end[0] - start[0]) * t;
      const y = start[1] + (end[1] - start[1]) * t;
      const z = start[2] + (end[2] - start[2]) * t;
      glowRef.current.position.set(x, y, z);
    }
  });
  
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
 return (
  <group>
    {/* The line */}
    <primitive object={lineRef.current as THREE.Line} />

    {/* Material */}
    <lineBasicMaterial
      attach="material"
      color={color}
      transparent
      opacity={0.5}
      linewidth={2}
    />

    {/* Glowing particle */}
<mesh ref={glowRef}>
  <sphereGeometry args={[0.05, 16, 16]} />
  <meshBasicMaterial color={color} />
</mesh>

  </group>
  );
}


// Particle Field with occasional shimmer
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;

  const { positions, shimmerIndices } = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const shimmerIndices: number[] = [];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      // Randomly select some particles to shimmer (10%)
      if (Math.random() < 0.1) {
        shimmerIndices.push(i);
      }
    }
    return { positions, shimmerIndices };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      
      // Make some particles shimmer
      const geometry = particlesRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      
      shimmerIndices.forEach((idx) => {
        const shimmer = Math.sin(state.clock.getElapsedTime() * 2 + idx) * 0.5 + 0.5;
        // Particle shimmer is handled by opacity in the material, but we can add subtle movement
        const baseY = positionAttribute.array[idx * 3 + 1];
        positionAttribute.array[idx * 3 + 1] = baseY + Math.sin(state.clock.getElapsedTime() + idx) * 0.1;
      });
      
      positionAttribute.needsUpdate = true;
    }
  });
  
return (
  <points ref={particlesRef}>
    <bufferGeometry>
      <primitive
        attachObject={['attributes', 'position']}
        object={new THREE.BufferAttribute(positions, 3)}
      />
    </bufferGeometry>
    <pointsMaterial
      size={0.05}
      color="#ffffff"
      transparent
      opacity={0.5}
      sizeAttenuation
    />
  </points>
);

}

// Gentle Camera Movement
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.5;
    state.camera.position.y = Math.cos(state.clock.getElapsedTime() * 0.12) * 0.5;
  });
  return null;
}

// Main Scene
type NeuralSceneProps = {
  hoveredNode: string | null;
  setHoveredNode: (id: string | null) => void;
  onNodeClick: (id: string) => void;
};

function NeuralScene({ hoveredNode, setHoveredNode, onNodeClick }: NeuralSceneProps) {
  const nodes = [
    { position: [-3, 2, 0] as [number, number, number], color: '#fb923c', label: 'SurFox Engage', id: 'engage' },
    { position: [3, 2, 0] as [number, number, number], color: '#a78bfa', label: 'SurFox Recruit', id: 'recruit' },
    { position: [3, -2, 0] as [number, number, number], color: '#60a5fa', label: 'SurFox Insight', id: 'insight' },
    { position: [-3, -2, 0] as [number, number, number], color: '#f472b6', label: 'Analytics', id: 'analytics' },
    { position: [0, 0, 0] as [number, number, number], color: '#818cf8', label: 'Infinity Core', id: 'infinity' }
  ];

  const connections: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [0, 2], [1, 3],
    [0, 4], [1, 4], [2, 4], [3, 4]
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#fb923c" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#818cf8" />
      <pointLight position={[0, 0, 10]} intensity={1.5} />
      
      {/* Background */}
      <Particles />
      
      {/* Connections */}
      {connections.map(([startIdx, endIdx], i) => (
        <ConnectionLine
          key={i}
          start={nodes[startIdx].position}
          end={nodes[endIdx].position}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <NeuralNode
          key={i}
          position={node.position}
          color={node.color}
          label={node.label}
          id={node.id}
          onHover={setHoveredNode}
          onClick={onNodeClick}
          isHovered={hoveredNode === node.id}
          anyNodeHovered={!!hoveredNode}
        />
      ))}
      
      <CameraRig />
    </>
  );


export default function SystemPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<'entering' | 'inside' | 'exiting'>('entering');
  const [showUI, setShowUI] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('inside');
      setShowUI(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setPhase('exiting');
    setShowUI(false);
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  const handleNodeClick = (id: string) => {
    console.log('Clicked node:', id);
    // router.push(`/products/${id}`);
  };

  const nodeLabels: Record<string, string> = {
    engage: 'SurFox Engage',
    recruit: 'SurFox Recruit',
    insight: 'SurFox Insight',
    analytics: 'Analytics Dashboard',
    infinity: 'Infinity Core'
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', -apple-system, sans-serif; }
        
        .gradient-text-cool {
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Entry Animation */}
      <AnimatePresence>
        {phase === 'entering' && (
          <>
            <motion.div
              initial={{ scale: 3, opacity: 0.6 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500 blur-[150px] z-50"
            />
            <motion.div
              initial={{ scale: 3, opacity: 0.6 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500 blur-[150px] z-50"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 via-purple-500 to-indigo-500 blur-[100px] z-50"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-black z-40"
            />
          </>
        )}
      </AnimatePresence>

      {/* 3D Canvas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'inside' ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute inset-0"
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <NeuralScene 
            hoveredNode={hoveredNode}
            setHoveredNode={setHoveredNode}
            onNodeClick={handleNodeClick}
          />
        </Canvas>
      </motion.div>

      {/* UI Overlay */}
      <AnimatePresence>
        {showUI && phase !== 'exiting' && (
          <>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-20 left-0 right-0 text-center z-10 pointer-events-none"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text-cool">The System</span>
              </h1>
              <p className="text-gray-400 text-lg font-light">
                Navigate the SurFox Infinity cognition layer
              </p>
            </motion.div>

            {/* Hovered Node Label */}
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
                >
                  <div className="px-10 py-5 rounded-2xl bg-black/90 backdrop-blur-xl border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/30">
                    <p className="text-2xl font-semibold text-white">
                      {nodeLabels[hoveredNode]}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-32 left-0 right-0 text-center z-10 pointer-events-none"
            >
              <p className="text-gray-500 text-sm font-light">
                Hover over nodes to explore • Click to enter
              </p>
            </motion.div>

            {/* Return Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={handleExit}
              className="absolute bottom-8 right-8 px-6 py-3 rounded-full border border-gray-700/50 bg-black/50 backdrop-blur-md hover:bg-black/70 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 z-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium text-gray-300">Return to Surface</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Exit Animation */}
      <AnimatePresence>
        {phase === 'exiting' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black z-30"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 3, opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500 blur-[150px] z-40"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 3, opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500 blur-[150px] z-40"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
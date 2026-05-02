import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, OrbitControls, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

/**
 * TO REPLACE WITH YOUR OWN MODEL:
 * 1. Upload your .glb file to a public URL or place it in the /public folder.
 * 2. Update the MODEL_URL constant below with your file path.
 */
const MODEL_URL = "https://dl.dropboxusercontent.com/scl/fi/gg7imqj7mgas0ze56enim/Animated-Walking-Tshirt.glb?rlkey=z4360lwr6b1wc2w5atgxcw7zx"; 

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Model({ url, scrollProgress, scale }: { url: string; scrollProgress: number; scale: number }) {
  // Only try to load if a URL is provided
  const { scene } = url ? useGLTF(url) : { scene: null };
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = time * 0.5 + (scrollProgress * Math.PI * 2);
    }
  });

  if (!scene) return null;

  return (
    <Center>
      <primitive 
        ref={modelRef} 
        object={scene} 
        scale={scale} // Use responsive scale
      />
    </Center>
  );
}

function FallbackMesh({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.5 + (scrollProgress * Math.PI * 2);
    meshRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#141414"
          speed={2}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#333"
        />
      </mesh>
    </Float>
  );
}

export default function TeeModelViewer({ scrollProgress }: { scrollProgress: number }) {
  const { width } = useWindowSize();
  
  // Responsive calculations
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  // Responsive height: smaller on mobile, larger on desktop
  const containerHeight = isMobile ? '50vh' : isTablet ? '60vh' : '70vh';
  
  // Responsive camera position: closer on mobile for better view
  const cameraPosition: [number, number, number] = isMobile 
    ? [4, 3, 5] 
    : isTablet 
      ? [4.5, 3.5, 5.5] 
      : [5, 4, 6];
  
  // Responsive model scale: smaller on mobile
  const modelScale = isMobile ? 1.2 : isTablet ? 1.5 : 1.9;
  
  // Responsive text size
  const textSize = isMobile ? 'text-[20vw]' : isTablet ? 'text-[18vw]' : 'text-[15vw]';

  return (
    <div className={`w-full relative z-10 pointer-events-none`} style={{ height: containerHeight }}>
      <Canvas shadows dpr={isMobile ? 1 : isTablet ? [1, 1.25] : [1, 1.5]}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          {MODEL_URL ? (
            <Model url={MODEL_URL} scrollProgress={scrollProgress} scale={modelScale} />
          ) : (
            <FallbackMesh scrollProgress={scrollProgress} />
          )}
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`${textSize} font-brutal uppercase text-white/5 absolute select-none`} />
      </div>
    </div>
  );
}


import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Global scroll tracking for R3F
const useScrollPosition = () => {
  const scrollRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll 0 to 1 based on doc height
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = window.scrollY / (docHeight || 1);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollRef;
};

// Camera Controller
const ParallaxCamera = () => {
  const scrollRef = useScrollPosition();
  useFrame(({ camera }) => {
    // Move camera down slightly as we scroll
    const targetY = -scrollRef.current * 5; // Reduced movement
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Very subtle rotation
    const targetRotX = scrollRef.current * 0.05;
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      targetRotX,
      0.05
    );
  });
  return null;
};

// Subtle Aurora Plane
const AuroraPlane = ({ position }: { position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    (mesh.current.material as any).opacity = 0.05 + Math.sin(t * 0.2) * 0.02; // Very subtle opacity
  });

  return (
    <mesh ref={mesh} position={position} rotation={[0, 0, 0]}>
      <planeGeometry args={[30, 60]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.05} />{" "}
      {/* Sky-500 */}
    </mesh>
  );
};

// Ambient Parallax Shapes (Spheres instead of Lines/Boxes for softness)
const AmbientShapes = () => {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.05; // Slow rotation
  });

  return (
    <group ref={group}>
      <mesh position={[-10, 5, -10]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.1} />{" "}
        {/* Indigo */}
      </mesh>
      <mesh position={[10, -5, -15]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial color="#0ea5e9" transparent opacity={0.1} />{" "}
        {/* Sky */}
      </mesh>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ParallaxCamera />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {/* Soft atmospheric background */}
        <AuroraPlane position={[0, 0, -15]} />

        {/* Subtle geometric shapes */}
        <AmbientShapes />

        <Sparkles
          count={50} // Reduced count
          scale={[20, 20, 10]}
          size={1.5}
          speed={0.2} // Slower speed
          color="#94a3b8" // Slate-400
          opacity={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

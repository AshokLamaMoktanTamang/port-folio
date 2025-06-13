import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// AuroraPlane component (unchanged)
const AuroraPlane = ({ position }: { position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    (mesh.current.material as any).opacity = 0.1 + Math.sin(t * 0.3) * 0.05;
  });

  return (
    <mesh ref={mesh} position={position} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 40]} />
      <meshBasicMaterial color="#00ffaa" transparent opacity={0.15} />
    </mesh>
  );
};

// VerticalLines component (unchanged)
const VerticalLines = ({ x, color }: { x: number; color: string }) => {
  const lines = [];
  for (let i = -10; i <= 10; i += 2) {
    lines.push(
      <mesh key={i} position={[x, i, -5]}>
        <boxGeometry args={[0.03, 1.5, 0.03]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    );
  }
  return <>{lines}</>;
};

// New rotating Torus component
const RotatingTorus = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime() * 0.5;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.7;
  });
  return (
    <mesh position={position} ref={mesh}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#ff0088" transparent opacity={0.3} />
    </mesh>
  );
};

// New floating Sphere component
const FloatingSphere = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    mesh.current.position.y =
      position[1] + Math.sin(clock.getElapsedTime()) * 0.5;
  });
  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#00aaff" transparent opacity={0.25} />
    </mesh>
  );
};

// New scaling Box component
const ScalingBox = ({ position }: { position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime()) * 0.3;
    mesh.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#ffaa00" transparent opacity={0.2} />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 20], fov: 70 }}>
        <ambientLight intensity={0.3} />

        {/* Left vertical glowing lines */}
        <VerticalLines x={-9.5} color="#00ffff" />
        <VerticalLines x={-10} color="#0066ff" />

        {/* Right vertical glowing lines */}
        <VerticalLines x={9.5} color="#ffaa00" />
        <VerticalLines x={10} color="#ff00aa" />

        {/* Aurora Plane behind content */}
        <AuroraPlane position={[0, 0, -10]} />

        {/* New 3 objects */}
        <RotatingTorus position={[-5, 3, -15]} />
        <ScalingBox position={[0, 5, -13]} />

        <Sparkles
          count={100}
          scale={[30, 30, 10]} // wider horizontal spread
          size={1}
          speed={0.5}
          color="#ffffff"
          opacity={0.4}
          position={[-5, 0, -10]} // moved left side
        />

        <FloatingSphere position={[6, -3, -12]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

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
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={100}
          depth={5}
          count={7000}
          factor={6}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

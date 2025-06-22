import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function KitchenIsland() {
  return (
    <group>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[2.5, 0.8, 1]} />
        <meshStandardMaterial color="#b09774" />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[2.6, 0.1, 1.05]} />
        <meshStandardMaterial color="#dedede" />
      </mesh>
      <mesh position={[-1.2, 0.05, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[1.2, 0.05, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[-1.2, 0.05, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[1.2, 0.05, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </group>
  );
}

export default function KitchenIsland3D() {
  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 8px 32px #0002", background: "#fff" }}>
      <Canvas camera={{ position: [4, 3, 4], fov: 35 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={0.5} />
        <KitchenIsland />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

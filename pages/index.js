import { Suspense } from "react";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Mech from "../components/Mech";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 100, 200] }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Mech />
          <OrbitControls
            autoRotate
            autoRotateSpeed={3}
            target={new Vector3(0, 50, 0)}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

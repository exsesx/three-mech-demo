import MechModel from "../components/MechModel";
import { OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 100, 200] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={3}
            target={new Vector3(0, 50, 0)}
          />
          <MechModel />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

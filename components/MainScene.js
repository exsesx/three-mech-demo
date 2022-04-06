import MechModel from "../components/MechModel";
import { OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Suspense } from "react";
import { Center } from "@mantine/core";
import { useControls, Leva } from "leva";

export default function MainScene({ onCreated, onReady }) {
  const { enabled, intensity } = useControls("Lights", {
    enabled: true,
    intensity: 1,
  });
  const { autoRotate, autoRotateSpeed } = useControls("Controls", {
    autoRotate: true,
    autoRotateSpeed: 3,
  });

  return (
    <Center style={{ height: "100%", width: "100%", zIndex: 2 }}>
      <Leva collapsed />
      <Canvas camera={{ position: [0, 100, 200] }} onCreated={onCreated}>
        <Suspense fallback={null}>
          {enabled && <ambientLight intensity={intensity} />}
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            target={new Vector3(0, 50, 0)}
          />
          <MechModel onReady={onReady} />
        </Suspense>
      </Canvas>
      <Loader />
    </Center>
  );
}

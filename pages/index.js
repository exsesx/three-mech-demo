import dynamic from "next/dynamic";
import { Center, Loader } from "@mantine/core";
import { useState } from "react";

const MainScene = dynamic(() => import("../components/MainScene"), {
  ssr: false,
});

export default function Home() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <Center
          style={{
            height: "100%",
            width: "100%",
            zIndex: 9999,
            position: "absolute",
            top: "-40px",
          }}
        >
          <Loader color="red" />
        </Center>
      )}
      <MainScene
        onCreated={(state) => {
          console.log("--> Canvas created", state);
        }}
        onReady={(progress) => {
          requestAnimationFrame(() => {
            setVisible(false);
          });
          console.log("--> Model ready", progress);
        }}
      />
    </>
  );
}

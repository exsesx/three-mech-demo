import dynamic from "next/dynamic";
import { Center, Loader } from "@mantine/core";
import { useState } from "react";

const MainScene = dynamic(() => import("../components/MainScene"), {
  ssr: false,
});

export default function Home() {
  const [created, setCreated] = useState(false);

  return (
    <>
      {!created && (
        <Center
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
            position: "absolute",
            top: 0,
          }}
        >
          <Loader />
        </Center>
      )}
      <MainScene
        onCreated={(state) => {
          console.log("--> Canvas created", state);
          setCreated(true);
        }}
      />
    </>
  );
}

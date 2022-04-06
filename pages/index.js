import dynamic from "next/dynamic";

const MainScene = dynamic(() => import("../components/MainScene"), {
  ssr: false,
});

export default function Home() {
  return <MainScene />;
}

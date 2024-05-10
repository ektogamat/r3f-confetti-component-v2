import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Overlay from "./components/Overlay";
import Scene from "./components/Scene";
import ExplosionConfetti from './components/Confetti'

export default function App() {
  return (
    <>
      <Canvas
        dpr={1}
        shadows
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, -0.3, 6], near: 0.5, fov: 45 }}
      >
        <color attach="background" args={["#fbd693"]} />

        <OrbitControls
          zoomSpeed={1}
          minDistance={4}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2.0}
        />
        <ExplosionConfetti shadows particleSize={0.2} numberOfExplosions={3} position={[0, 1.9, 0]} colorsArray={['green', 'blue', 'orange', 'yellow', 'red']} />
        <Scene />
      </Canvas>
      {/* <Overlay /> */}
    </>
  );
}

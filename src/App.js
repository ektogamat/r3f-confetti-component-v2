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
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        camera={{ position: [4, 0.3, 8], near: 0.1, fov: 35 }}
      >
        <ExplosionConfetti shadows particleSize={0.2} numberOfExplosions={3} position={[0, 1.9, 0]} colorsArray={['green', 'blue', 'orange', 'yellow', 'red']} />

        <OrbitControls
          zoomSpeed={0.4}
          minDistance={4}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2.0}
          target={[0, 1, 0]}
          autoRotate
          autoRotateSpeed={-0.5}
        />

        <Scene />
      </Canvas>
      <Overlay />
    </>
  );
}

import { Text3D, Center } from '@react-three/drei'
import Lights from './Lights'
import BackgroundBG from './BackgroundBG'
import Clown from './Clown_in_car'
import { Autofocus, Bloom, ChromaticAberration, EffectComposer, Vignette } from '@react-three/postprocessing'

export default function Scene(props) {
  return (
    <>
      <Text3D
        curveSegments={3}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.06}
        height={0.1}
        lineHeight={0.1}
        letterSpacing={-0.02}
        scale={0.07}
        font='/interFont.json'
        castShadow
        position={[-0.35, 0.32, 1.7]}

      >
        CONFETTI V2
        <meshPhysicalMaterial color='orange' roughness={0.1} />
      </Text3D>
      <Clown position={[0, 0.0, 0]} />
      <Lights />
      <BackgroundBG />

      <EffectComposer multisampling={4}>
        <Autofocus bokehScale={20} focusRange={0.025} target={[0, 0.0, -0.9]} />
        <ChromaticAberration radialModulation modulationOffset={0.9} offset={[0.03, 0.03]} />
        <Vignette offset={0.6} darkness={0.4} />
        <Bloom luminanceThreshold={0.4} radius={0.5} luminanceSmoothing={0.9} mipmapBlur intensity={0.3} />
      </EffectComposer>
    </>
  )
}

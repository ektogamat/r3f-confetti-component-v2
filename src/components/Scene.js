import { Text3D, Center } from '@react-three/drei'
import Lights from './Lights'
import BackgroundBG from './BackgroundBG'

export default function Scene(props) {
  return (
    <>
      <Center>
        <Text3D
          curveSegments={5}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.06}
          height={0.3}
          lineHeight={0.1}
          letterSpacing={-0.02}
          scale={0.7}
          font='/interFont.json'
          castShadow
          position={[0, 0.3, 0]}
        >
          CONFETTI V2
          <meshPhysicalMaterial color='orange' roughness={0.1} />
        </Text3D>
      </Center>
      <Lights />
      <BackgroundBG />
    </>
  )
}

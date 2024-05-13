import { Environment, Plane } from '@react-three/drei'

export default function BackgroundBG() {
  return (
    <>
      <Environment
        // preset="apartment"
        files={'/background.jpg'}
        environmentIntensity={6}
        ground={{
          height: 15, // Height of the camera that was used to create the env map (Default: 15)
          radius: 990, // Radius of the world. (Default 60)
          scale: 150, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
        }}
      ></Environment>
      <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={80}>
        <shadowMaterial opacity={0.6} />
      </Plane>
    </>
  )
}

// CONFETTI COMPONENT V2 BY ANDERSON MANCINI - CC 2024
// If you use, please credit it :)

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Instance, Instances } from '@react-three/drei'

/**
 * ExplosionConfetti component creates a confetti explosion effect in a three.js scene.
 * @param {Object} props - The props object.
 * @param {String[]} [props.colorsArray=['#452632', '#91204d', '#e4844a', '#e8bf56', '#e2f7ce']] - Array of Hex color codes for confetti particles.
 * @param {Number} [props.numberOfExplosions=2] - Number of explosions to create. Maximum of 5 for performance reasons.
 * @param {Number} [props.particleAmount=100] - Total number of particles for each explosion. Maximum of 300.
 * @param {Number} [props.particleSize=0.2] - Size of each particle.
 * @param {Number} [props.spreaAreadRadius=5] - Spread area radius for the explosion.
 * @param {Number} [props.contettiDuration=75] - Duration of each confetti explosion in frames.
 * @param {Number} [props.explosionCount=Infinity] - Total count of explosions. Determines how many times the explosion will happen before being removed from the scene.
 * @param {Boolean} [props.shadows=false] - Enable or disable castShadow. Defaults to false.
 * @param {Number[]} [props.position=[0,0,0]] - Position of the confetti explosion in the scene (XYZ coordinates).
 * @returns {JSX.Element} React component
 */

function ExplosionConfetti({ position = [0, 0, 0], colorsArray = ['#452632', '#91204d', '#e4844a', '#e8bf56', '#e2f7ce'], numberOfExplosions = 2, particleAmount = 100, particleSize = 0.2, spreaAreadRadius = 5, contettiDuration = 75, explosionCount = Infinity, shadows = false }) {
  const ref = useRef()

  const limmitedParticleAmount = Math.min(particleAmount, 300)

  const [isExploding, setIsExploding] = useState(true)
  const particles = useMemo(() => Array.from({ length: limmitedParticleAmount }), [])
  const tempColor = useMemo(() => new THREE.Color(), [])

  const data = useMemo(
    () =>
      Array.from({ length: limmitedParticleAmount }, () => ({
        color: colorsArray[
          Math.floor(Math.random() * 5)
        ]
      })),
    [colorsArray]
  )

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(limmitedParticleAmount)
          .fill()
          .flatMap((_, i) => tempColor.set(data[i].color).toArray())
      ),
    [colorsArray]
  )

  useEffect(() => {

    setIsExploding(true)

  }, [explosionCount])

  return (
    <>
      {Array.from({ length: Math.min(numberOfExplosions, 3) }).map((_, index) => (
        <Instances
          key={index}
          limit={limmitedParticleAmount}
          ref={ref}
          castShadow={shadows}
          position={position}
          frustumCulled={false}
        >
          <planeGeometry args={[particleSize, particleSize, 1, 1]}>
            <instancedBufferAttribute
              attach='attributes-color'
              args={[colorArray, 3]}
            />
          </planeGeometry>
          <meshBasicMaterial roughness={1} side={THREE.DoubleSide} vertexColors />
          {particles.map((data, i) => (
            <SingleParticle
              key={i}
              id={i}
              {...data}
              isExploding={isExploding}
              setIsExploding={setIsExploding}
              spreaAreadRadius={spreaAreadRadius}
              contettiDuration={contettiDuration + Math.floor(Math.random() + 20 * index)}
              explosionCount={explosionCount}
            />
          ))}
        </Instances>
      ))}
    </>
  );
}

let lastRandomValue = null



function SingleParticle({ isExploding, setIsExploding, id, spreaAreadRadius, contettiDuration, explosionCount }) {
  const ref = useRef()

  let particle = {}
  let radius = 0.3
  let repetitionNumber = 0
  particle.destination = {}
  particle.rotateSpeed = {}
  let life = 0
  let scaleReduction
  let scale = { x: 1, y: 1, z: 1 }
  let duration
  let randomSpeed = 0
  const scaleReductionFactor = 0.3

  function calculateValues(id, spreaAreadRadius) {
    if (id === 0) {
      lastRandomValue = spreaAreadRadius / 2 - Math.random() * spreaAreadRadius

      return lastRandomValue
    } else {
      return lastRandomValue
    }
  }

  function resetValues() {
    randomSpeed = Math.random() * 0.015

    if (ref.current) {
      ref.current.position.x = calculateValues(id, spreaAreadRadius)
      ref.current.position.y = 0
      ref.current.position.z = calculateValues(id, spreaAreadRadius)
      ref.current.scale.set(scale.x, scale.y, scale.z)
    }

    particle.destination.x = (Math.random() - 0.5) * (radius) + randomSpeed
    particle.destination.y = (Math.random() - 0.5) * (radius) + randomSpeed
    particle.destination.z = (Math.random() - 0.5) * (radius) + randomSpeed

    particle.rotateSpeed.x = Math.random() * 0.5 + randomSpeed * 0.4
    particle.rotateSpeed.y = Math.random() * 0.5 + randomSpeed * 0.5
    particle.rotateSpeed.z = Math.random() * 0.5 + randomSpeed * 0.6

    life = 0
    scale.x = Math.random() * 0.5 + 0.5
    scale.y = Math.random() * 0.5 + 0.5
    scale.z = Math.random() * 0.5 + 0.5

    duration = contettiDuration

    if (repetitionNumber === explosionCount) {
      setIsExploding(false)
    }

    repetitionNumber++


  }

  resetValues()

  useFrame(() => {
    if (!isExploding) return
    scaleReduction = 1 - (scaleReductionFactor * life) / 25

    if (ref.current) {
      ref.current.position.set(
        (ref.current.position.x += particle.destination.x + randomSpeed),
        (ref.current.position.y +=
          particle.destination.y + scaleReduction * 0.1),
        (ref.current.position.z += particle.destination.z + randomSpeed)
      )

      ref.current.rotation.set(
        ref.current.rotation.x + particle.rotateSpeed.x / 2,
        ref.current.rotation.y + particle.rotateSpeed.y / 4,
        ref.current.rotation.z + particle.rotateSpeed.z / 2
      )

      ref.current.scale.set(
        scale.x * Math.max(scaleReduction, 0),
        scale.y * Math.max(scaleReduction, 0),
        scale.z * Math.max(scaleReduction, 0)
      )
    }

    if (life > duration) {
      resetValues()
    }



    life++
  })

  return <>{isExploding && <Instance ref={ref} />}</>
}

export default React.memo(ExplosionConfetti)

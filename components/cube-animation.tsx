"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Box, OrbitControls } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"
import type * as THREE from "three"

function CubeGroup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x += 0.001
    }
  })

  const cubes = []
  const colors = ["#9333ea", "#14b8a6", "#a855f7", "#2dd4bf"]

  // Create a grid of cubes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 2; k++) {
        // Skip some cubes to create an interesting pattern
        if ((i + j + k) % 3 === 0) continue

        const x = (i - 1.5) * 1.2
        const y = (j - 1.5) * 1.2
        const z = (k - 0.5) * 1.2

        const colorIndex = (i + j + k) % colors.length

        cubes.push(
          <Box key={`${i}-${j}-${k}`} position={[x, y, z]} args={[0.5, 0.5, 0.5]}>
            <meshStandardMaterial
              color={colors[colorIndex]}
              transparent={true}
              opacity={0.7}
              emissive={colors[colorIndex]}
              emissiveIntensity={0.4}
            />
          </Box>,
        )
      }
    }
  }

  return <group ref={groupRef}>{cubes}</group>
}

function Scene() {
  const { camera } = useThree()
  const isMobile = useMobile()

  useEffect(() => {
    camera.position.z = isMobile ? 8 : 6
  }, [camera, isMobile])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <CubeGroup />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export default function CubeAnimation() {
  return (
    <div className="w-full h-full absolute">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

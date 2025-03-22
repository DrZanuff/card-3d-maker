import { Canvas, useFrame } from '@react-three/fiber'
import { Text, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { ROTATION_LIMIT } from '@/constants'
import { useAtomValue } from 'jotai'
import { sampleCardTitleAtom } from '../sampleCardAtoms'
import './SampleCardView-styles.css'
import { currentSelectedAtom } from '@/atoms/cardTemplateAtom'
import { SAMPLE_CARD_CONFIG } from '../SampleCardEditor/SampleCardEditor'

function SampleCard3D() {
  const title = useAtomValue(sampleCardTitleAtom)
  const type = useAtomValue(currentSelectedAtom)
  const texture = useTexture(`/${type}.png`)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ pointer }) => {
    if (meshRef.current) {
      const maxRotation = ROTATION_LIMIT
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        pointer.y * -maxRotation,
        0.1,
      )
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        pointer.x * maxRotation,
        0.1,
      )
    }
  })

  const renderTitle = () => {
    if (title.length <= SAMPLE_CARD_CONFIG.TITLE_BREAK_LENGHT) {
      return (
        <Text
          position={[0, -1.3, 0.1]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      )
    } else {
      let firstPart = ''
      let secondPart = ''

      if (title.includes(' ')) {
        const spaceIndex = title.lastIndexOf(
          ' ',
          SAMPLE_CARD_CONFIG.TITLE_BREAK_LENGHT,
        )
        firstPart = title.substring(0, spaceIndex)
        secondPart = title.substring(spaceIndex + 1)
      } else {
        const middleIndex = Math.floor(title.length / 2)
        firstPart = title.substring(0, middleIndex) + '-'
        secondPart = title.substring(middleIndex)
      }

      return (
        <>
          <Text
            position={[0, -1.1, 0.1]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {firstPart}
          </Text>
          <Text
            position={[0, -1.4, 0.1]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {secondPart}
          </Text>
        </>
      )
    }
  }

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.5, 3.5]} />
      <meshStandardMaterial map={texture} transparent={true} opacity={1} />
      {renderTitle()}
    </mesh>
  )
}

export function SampleCardView() {
  return (
    <div className={'SampleCardView-container'}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <SampleCard3D />
      </Canvas>
    </div>
  )
}

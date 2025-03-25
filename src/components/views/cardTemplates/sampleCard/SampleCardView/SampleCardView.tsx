import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { ROTATION_LIMIT } from '@/constants'
import { useAtomValue } from 'jotai'
import {
  sampleCardNumberAtom,
  sampleCardPowerAtom,
  sampleCardTitleAtom,
} from '../sampleCardAtoms'
import './SampleCardView-styles.css'
import { currentSelectedAtom } from '@/atoms/cardTemplateAtom'
import { SAMPLE_CARD_CONFIG } from '../SampleCardEditor/SampleCardEditor'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const TEXT_TITLE_POSTIONS = {
  X: 0,
  Y: -1,
  Z: 0.18,
}
const TEXT_FONT_SIZE = 0.2
const TEXT_FONT_SIZE_SMALL = 0.1
const TEXT_POWER_POSITION = { X: 0, Y: -1.5, Z: 0.3 }
const TEXT_NUMBER_POSITION = { X: -1.02, Y: 1.45, Z: 0.2 }
const TEXT_OUTLINE = 0.02

function SampleCard3D() {
  const title = useAtomValue(sampleCardTitleAtom)
  const power = useAtomValue(sampleCardPowerAtom)
  const cardNumber = useAtomValue(sampleCardNumberAtom)
  const type = useAtomValue(currentSelectedAtom)
  const texture = useTexture(`spiderman.png`)
  const meshRef = useRef<THREE.Mesh>(null)

  const gltf = useLoader(GLTFLoader, '/sampleCard.glb')

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
          position={[0, TEXT_TITLE_POSTIONS.Y, TEXT_TITLE_POSTIONS.Z]}
          fontSize={TEXT_FONT_SIZE}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineColor="black"
          outlineWidth={TEXT_OUTLINE}
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
        firstPart = title.substring(0, middleIndex)
        secondPart = title.substring(middleIndex)
      }

      return (
        <>
          <Text
            position={[0, TEXT_TITLE_POSTIONS.Y + 0.4, TEXT_TITLE_POSTIONS.Z]}
            fontSize={TEXT_FONT_SIZE}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineColor="black"
            outlineWidth={TEXT_OUTLINE}
          >
            {firstPart}
          </Text>
          <Text
            position={[0, TEXT_TITLE_POSTIONS.Y + 0.1, TEXT_TITLE_POSTIONS.Z]}
            fontSize={TEXT_FONT_SIZE}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineColor="black"
            outlineWidth={TEXT_OUTLINE}
          >
            {secondPart}
          </Text>
        </>
      )
    }
  }

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[2.5, 3.2]} />

        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[2.5, 3.2]} />

        <meshStandardMaterial map={texture} transparent={true} opacity={1} />
        {renderTitle()}
      </mesh>

      <mesh position={[0, 0, 0]}>
        <Text
          position={[
            TEXT_POWER_POSITION.X,
            TEXT_POWER_POSITION.Y,
            TEXT_POWER_POSITION.Z,
          ]}
          fontSize={TEXT_FONT_SIZE}
          color="red"
          anchorX="center"
          anchorY="middle"
          outlineColor="black"
          outlineWidth={TEXT_OUTLINE}
        >
          {power}
        </Text>

        <Text
          position={[
            TEXT_NUMBER_POSITION.X,
            TEXT_NUMBER_POSITION.Y,
            TEXT_NUMBER_POSITION.Z,
          ]}
          fontSize={TEXT_FONT_SIZE_SMALL}
          color="yellow"
          anchorX="center"
          anchorY="middle"
          outlineColor="black"
          outlineWidth={TEXT_OUTLINE}
        >
          {cardNumber}
        </Text>
      </mesh>

      <primitive object={gltf.scene} scale={2} position={[0, -2, 0]} />
    </group>
  )
}

export function SampleCardView() {
  return (
    <div className={'SampleCardView-container'}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'black' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <SampleCard3D />
      </Canvas>
    </div>
  )
}

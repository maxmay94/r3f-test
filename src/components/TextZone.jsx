import { Text, Text3D, PresentationControls, Float } from '@react-three/drei'
import { useControls, button } from 'leva'

function TextZone() {

  const textControls = useControls('text', {
    text: 'hello.',
    color: 'white',
    position: {
      value: { x: 1, y: 1,},
      min: -4,
      max: 4,
      step: 0.01,
      joystick: 'invertY'
    }
  })

  const floatControls = useControls('textFloat', {
    speed: {
      value: 0.1,
      min: 0,
      max: 10,
      step: 0.001
    },
    intensity: {
      value: 0,
      min: 0,
      max: 100,
      step: 0.01
    }
  })

  return (
    <>
    <Float floatIntensity={floatControls.intensity} speed={floatControls.speed}>
        <Text
          position={[textControls.position.x, textControls.position.y, -1]}
          material-toneMapped={false}
          color={textControls.color}
        >
          {textControls.text}
        </Text>
    </Float>
    </>
  )
}

export default TextZone
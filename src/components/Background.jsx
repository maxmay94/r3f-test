import * as THREE from 'three'
import { Float, OrbitControls, PresentationControls } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import { useControls } from 'leva'

function Background() {

  const bgControlsDepth = useControls('bgDepth', {
    colorA: '#7fc797',
    colorB: '#e6c2f2',
    near: {
      value: 130,
      min: 0,
      max: 500
    },
    far: {
      value: 200,
      min: 0,
      max: 500
    },
  })

  const bgControlsNoise = useControls('bgNoise', {
    colorA: 'white',
    colorB: 'black',
    scale: {
      value: 130,
      min: 0,
      max: 500
    },
    alpha: {
      value: 0.2,
      min: 0,
      max: 1,
      step: 0.001
    },
  })

  const floatControls = useControls('bgFloat', {
    speed: {
      value: 4,
      min: 0,
      max: 10,
      step: 0.001
    },
    intensity: {
      value: 100,
      min: 0,
      max: 100,
      step: 0.01
    }
  })
  
  return (
    <>
      <Float floatIntensity={floatControls.intensity} speed={floatControls.speed} >
        <mesh scale={100}>
            <boxGeometry args={[1, 1, 1]} />
            <LayerMaterial side={THREE.BackSide}>
              <Depth 
                colorB={bgControlsDepth.colorB} 
                colorA={bgControlsDepth.colorA} 
                alpha={1} mode="normal" 
                near={bgControlsDepth.near} 
                far={bgControlsDepth.far} 
                origin={[100, 100, -100]} 
              />
              <Noise 
                mapping="local" 
                type="white" 
                scale={bgControlsNoise.scale} 
                colorA={bgControlsNoise.colorA} 
                colorB={bgControlsNoise.colorB} 
                mode="subtract" 
                alpha={bgControlsNoise.alpha} 
              />
            </LayerMaterial>
        </mesh>
      </Float>
    </>
  )
}

export default Background

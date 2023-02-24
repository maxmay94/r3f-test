import * as THREE from 'three'
import { LayerMaterial, Depth, Noise, Fresnel } from 'lamina'
import { Float } from '@react-three/drei'
import { useState } from 'react'
import { useControls } from 'leva'


function Shape() {

  const shapeControls = useControls('shapes', {
    baseColor: '#00330c',
    colorA: '#23600d',
    colorB: '#44634c',
    noiseScale: {
      value: 1000,
      min: 0,
      max: 1000,
      step: 1
    }
  })

  const [speed] = useState(() => 0.1 + Math.random() / 5)
  const [position] = useState(() => [(Math.random() * 6) - 3, (Math.random() * 6) - 3, (Math.random() * 6) - 3])
  const [scale] = useState(() => Math.random())

  return(
    <>
      <Float speed={speed} position={position} rotationIntensity={10} floatIntensity={40}>
        <mesh scale={scale}>
          <LayerMaterial color={shapeControls.colorA}>
            <Depth 
              colorA={shapeControls.colorA}
              colorB={shapeControls.colorB}
              alpha={0.5}
              mode={'normal'}
              near={0}
              far={2}
              origin={[1,1,1]}
            />
            <Depth 
              colorA={shapeControls.baseColor}
              colorB={shapeControls.colorB}
              alpha={0.5}
              mode={'add'}
              near={3}
              far={2}
              origin={[1,1,1]}
            />
              <Fresnel 
                mode={'add'} 
                color={new THREE.Color('#E7B473').convertSRGBToLinear()} 
                intensity={0.3}
                power={2.5}
                bias={0.0}
              />
            <Noise 
              mapping={'local'}
              type={'simplex'}
              scale={shapeControls.noiseScale}
              colorA={'#ffaf40'}
              colorB={'black'}
              mode={'overlay'}
            />
          </LayerMaterial>
          <torusGeometry />
        </mesh>
      </Float>
    </>
  )
}

export default Shape
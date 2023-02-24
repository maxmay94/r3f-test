import { PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'

import Background from './components/Background'
import TextZone from './components/TextZone'
import Shape from './components/Shape'

function App() {

  const cameraControls = useControls('camera', {
    config: {
      mass: 1,
      tension: 500
    },
    snap: {
      mass: 1,
      tension: 500
    },
    shapeCount:{
      value: 3,
      min: 0,
      max:10,
      step: 1
    }
  })
  
  let shapeCount = cameraControls.shapeCount
  const shapes = []
  for(let i = 0; i < shapeCount; i++) {
    shapes.push(<Shape key={i} />)
  }


  return (
    <>
      <Background />
      <PresentationControls
        global
        config={cameraControls.config}
        snap={cameraControls.snap}
        rotation={[0, -0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
      <TextZone />
      {shapes}
      </PresentationControls>
    </>
  )
}

export default App

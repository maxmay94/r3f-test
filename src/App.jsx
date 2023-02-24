import Background from './components/Background'
import TextZone from './components/TextZone'
import { PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'

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
  })

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
      </PresentationControls>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { Leva } from 'leva'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Leva collapsed />
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>,
)

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import MEarthQuake from '../Components/Models/EarthModel.js'
import { Environment } from '@react-three/drei'

export default function EarthQuake() {
  return (
    <div className="earthquake">
      <Canvas>
        <Suspense fallback={null}>
          <MEarthQuake />
          {/* <Environment preset="night" background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}
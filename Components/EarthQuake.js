import { Suspense } from 'react'
import { Canvas, events } from '@react-three/fiber'
import MEarthQuake from '../Components/Models/EarthModel.js'
import { Environment } from '@react-three/drei'


export default function EarthQuake() {
  
  return (
    <div className="earthquake">
      <Canvas>
        <Suspense fallback={null}>
          <MEarthQuake />
          <mesh rotation={[0, 10, 0]}>
            <meshStandardMaterial attach="material" color={"#6be092"} />
          </mesh>
          {/* <Environment preset="night" background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'



export default function EarthModel(props) {
  const { viewport } = useThree() //to get viewport dimensions
  const earthRef = useRef();
  const [hover, setHover] = useState(true);

  earthRef.current.position.set(-6, 1, 0) //setting the rotaion value of the globe
  useFrame(({ mouse }) => {
    if (hover) {
      const x = (mouse.x * viewport.width) / 2 //configuring x,y based on viewport dimensions
      const y = (mouse.y * viewport.height) / 2 //configuring x,y based on viewport dimensions
      earthRef.current.rotation.set(-y, x, 0) //setting the rotaion value of the globe
    }
  });
  const { nodes, materials } = useGLTF('/earthquakes_-_2010__2011.glb')
  return (
    <group ref={earthRef} {...props} dispose={null}>
      <group position={[0,0,0]} scale={0.03} onPointerOver={() => {setHover(true);}} onPointerOut={() => {setHover(true);}}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/earthquakes_-_2010__2011.glb')
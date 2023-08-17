import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'


export default function EarthModel(props) {
  // const { viewport } = useThree() //to get viewport dimensions
  const earthRef = useRef();
  const [hover, setHover] = useState(false);

  useFrame(({ mouse }) => {
    earthRef.current.rotation.y += 0.002 //setting the rotaion value of the globe
    // earthRef.current.scale.set(1, 1, 1) //setting the scale value of the globe
    // const x = (mouse.x * viewport.width) / 2 //configuring x,y based on viewport dimensions
    // const y = (mouse.y * viewport.height) / 2 //configuring x,y based on viewport dimensions
    // earthRef.current.rotation.set(-x,y,2) //setting the rotaion value of the globe
    // if (hover) {
    //   console.log('hello')    }
    // else {
    // }
  });
  const { nodes, materials } = useGLTF('/earthquakes.glb')
  return (
    <group ref={earthRef} {...props} dispose={null}>
      <group rotation={[4.448, 0, 40.66]} position={[0,0,0]} scale={0.065} onPointerOver={() => {setHover(true);}} onPointerOut={() => {setHover(false);}}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('./earthquakes.glb')
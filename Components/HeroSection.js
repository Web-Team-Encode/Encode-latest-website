import styles from '../styles/Hero.module.css';
import React, { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

const HeroSection = () => {

    const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
        const ref = useRef();
        const gltf = useLoader(GLTFLoader, modelPath);
        const [hovered, setHovered] = useState(false);

        useFrame((state, delta) => (ref.current.rotation.y += 0.003));
        return (
            <primitive
                ref={ref}
                object={gltf.scene}
                scale={hovered ? scale * 0.03 : scale * 0.025}
                position={position}
                onMouseOver={(e) => setHovered(true)}
                onMouseOut={(e) => setHovered(false)}

            />
        );
    };
    const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
        return (
            <Suspense>
                <GLTFModel modelPath={modelPath} scale={scale} position={position} />
                <OrbitControls />
            </Suspense>
        );
    };

    return (
        <>
            <div className={styles.hero_section}>
                <div className={styles.hero_contents}>
                    <div className={styles.hero_upper_content}>
                        <section><h1>
                            Weird Mind's <br /> boundless opportunities
                        </h1>
                        <section className={styles.event_button}>
                            
                        </section>
                        </section>
                        
                    </div>
                </div>
                {/* <div className={styles.threed_section}>
                    <div className="canvas-wrapper">
                        <Canvas camera={{ position: [10, 25, 10] }}>
                        <OrbitControls />
                        <ambientLight intensity={1.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[10, 10, 10]} />
                        <ModelViewer modelPath="./earthquakes.glb" />
                    </Canvas>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default HeroSection;     
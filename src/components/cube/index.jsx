"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useGLTF } from '@react-three/drei';
import styles from './style.module.scss';

export default function index() {
    return (
        <div className={styles.main}>
            <div className={styles.cube}>
                <Canvas>
                    <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={10}/>
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 3, 1]} />
                    <CustomModel />
                </Canvas>
            </div>
        </div>
    );
}

function CustomModel() {
    const model = useGLTF('/assets/ud.glb');
    return (
        <motion.mesh>
            <primitive object={model.scene} scale={4.5} />
        </motion.mesh>
    );
}
"use client";

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useGLTF } from '@react-three/drei';
import styles from './style.module.scss';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });
    const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
    const smoothProgress = useSpring(progress, { damping: 20 });

    return (
        <div ref={container} className={styles.main}>
            <div className={styles.cube}>
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <CustomModel progress={smoothProgress} />
                </Canvas>
            </div>
        </div>
    );
}

function CustomModel({ progress }) {
    const model = useGLTF('/assets/ud.glb');
    return (
        <motion.mesh rotation-y={progress} rotation-x={progress}>
            <primitive object={model.scene} scale={2.5} />
        </motion.mesh>
    );
}
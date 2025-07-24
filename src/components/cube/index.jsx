"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import styles from './style.module.scss';

export default function UdPage() {
  return (
    <div className={styles.main}>
      <div className={styles.cube}>
        <Canvas>
          <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={10} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 3, 1]} />
          <CustomModel />
        </Canvas>

        <div className={styles.textOverlay}>
          <p>
            The <em>oud</em> is a stringed instrument with roots<br />
            in the rich traditions of Arabic music.<br />
            Crafted with soul, played with passion.
          </p>
        </div>
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

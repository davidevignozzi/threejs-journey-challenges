import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { button, useControls } from 'leva';
import { gsap } from 'gsap';

const SuperMario = () => {
  /**
   * Trigger Animation
   */
  const animateCube = useControls('Animation Cube', {
    cubeAnimation: button(() => {
      cubeAnimation();
    })
  });

  /**
   * Nodes
   */
  const { nodes } = useGLTF('/models/mario.glb');

  /**
   * Ref
   */
  const cubeRef = useRef();

  const [smoothCameraTarget] = useState(() => new THREE.Vector3());

  /**
   * Animation
   */
  const cubeAnimation = () => {
    /**
     * Cube Appear | Scale
     */
    gsap.to(cubeRef.current.scale, {
      x: 0.35,
      y: 0.35,
      z: 0.35,
      duration: 1,
      ease: 'power0.out',
      yoyo: true,
      repeat: 1
    });

    /**
     * Cube Jumps | Position
     */
    gsap.to(cubeRef.current.position, {
      y: 3,
      duration: 1,
      ease: 'power1.out',
      yoyo: true,
      repeat: 1
    });

    /**
     * Cube Rotation | Position
     */
    gsap.to(cubeRef.current.rotation, {
      y: Math.PI * 4,
      duration: 1.5,
      ease: 'sine',
      onComplete: () => {
        /**
         * Reset the rotation
         */
        cubeRef.current.rotation.y = 0;
      }
    });
  };

  /**
   * Camera Follow the Cube
   */
  useFrame((state, delta) => {
    const cubePosition = cubeRef.current.position;
    const cameraTarget = new THREE.Vector3();

    cameraTarget.copy(cubePosition);
    smoothCameraTarget.lerp(cubePosition, 5 * delta);

    state.camera.lookAt(smoothCameraTarget);
  });

  return (
    <group ref={cubeRef} position-y={0} scale={0}>
      {/* Cube */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        rotation={nodes.Cube.rotation}
      >
        <meshStandardMaterial roughness={0.675} color={'#FFE92B'} />

        {/* ? */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert.geometry}
          position={nodes.Vert.position}
        >
          <meshStandardMaterial roughness={0.675} color={'#ffffff'} />
        </mesh>
      </mesh>
    </group>
  );
};

useGLTF.preload('/mario.glb');

export default SuperMario;

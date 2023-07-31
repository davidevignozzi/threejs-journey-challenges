import React, { useEffect, useRef, useState } from 'react';
import { button, useControls } from 'leva';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { gsap } from 'gsap';

const DragonEvolved = () => {
  /**
   * Trigger Animation
   */
  const animateDragon = useControls('Animation Dragon', {
    enter: button(() => {
      enterAnimation();
    }),
    hide: button(() => {
      hideAnimation();
    })
  });

  /**
   * States & Refs
   */
  const [smoothCameraTarget] = useState(() => new THREE.Vector3());
  const group = useRef();
  const dragonRef = useRef();
  const dragonPositionRef = useRef();

  /**
   * Model
   */
  const { nodes, materials, animations } = useGLTF(
    './models/Dragon_Evolved.gltf'
  );
  const { actions } = useAnimations(animations, group);

  /**
   * Flying Animation
   */
  useEffect(() => {
    const anim = 'Flying_Idle';
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, []);

  /**
   * Mooving animation
   */
  useFrame((state, delta) => {
    const eTime = state.clock.getElapsedTime();
    dragonPositionRef.current.position.y = Math.sin(eTime * 2) * 0.25;
    dragonPositionRef.current.position.x = Math.cos(eTime * 2) * 0.25;
    dragonPositionRef.current.position.z = Math.sin(eTime * 2) * 0.25;

    /**
     * Camera
     */
    const dragonPosition = dragonRef.current.position;
    const cameraTarget = new THREE.Vector3();

    cameraTarget.copy(dragonPosition);
    smoothCameraTarget.lerp(dragonPosition, 5 * delta);

    state.camera.lookAt(smoothCameraTarget);
  });

  /**
   * Enter Animation
   */
  const enterAnimation = () => {
    /**
     * Make it Appear | Scale
     */
    gsap.to(dragonRef.current.scale, {
      x: 0.4,
      y: 0.4,
      z: 0.4,
      ease: 'power0.out'
    });

    /**
     * Make it Fly from the screen | Position
     */
    gsap.to(dragonRef.current.position, {
      y: 2.5,
      duration: 1.25,
      ease: 'power1.out'
    });
  };

  /**
   * Hide Animation
   */
  const hideAnimation = () => {
    /**
     * Make it Disappear | Scale
     */
    gsap.to(dragonRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      ease: 'power4.in'
    });

    /**
     * Make it Return in the screen | Position
     */
    gsap.to(dragonRef.current.position, {
      y: 0,
      duration: 1.25,
      ease: 'power1.out'
    });
  };

  return (
    <group ref={group} dispose={null}>
      <group ref={dragonPositionRef} name="Scene">
        <group ref={dragonRef} scale={0}>
          <group name="Dragon">
            <skinnedMesh
              name="Cube221"
              geometry={nodes.Cube221.geometry}
              material={materials.Dragon_Main}
              skeleton={nodes.Cube221.skeleton}
            />
            <skinnedMesh
              name="Cube221_1"
              geometry={nodes.Cube221_1.geometry}
              material={materials.Dragon_Secondary}
              skeleton={nodes.Cube221_1.skeleton}
            />
            <skinnedMesh
              name="Cube221_2"
              geometry={nodes.Cube221_2.geometry}
              material={materials.Dragon_Horn}
              skeleton={nodes.Cube221_2.skeleton}
            />
            <skinnedMesh
              name="Cube221_3"
              geometry={nodes.Cube221_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube221_3.skeleton}
            />
            <skinnedMesh
              name="Cube221_4"
              geometry={nodes.Cube221_4.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube221_4.skeleton}
            />
          </group>
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  );
};

export default DragonEvolved;

useGLTF.preload('./models/Dragon_Evolved.gltf');

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { button, useControls } from 'leva';
import { gsap } from 'gsap';

const DragonEvolved = () => {
  const group = useRef();
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    './models/Dragon_Evolved.gltf'
  );
  const { actions } = useAnimations(animations, group);

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
   * Flying Animation
   */
  useEffect(() => {
    const anim = 'Flying_Idle';
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, []);

  /**
   * Enter Animation
   */
  const enterAnimation = () => {
    /**
     * Make it Appear
     */
    gsap.to(dragonRef.current.scale, {
      x: 0.5,
      y: 0.5,
      z: 0.5
    });

    /**
     * Make it Fly from the screen
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
     * Make it Disappear
     */
    gsap.to(dragonRef.current.scale, {
      x: 0,
      y: 0,
      z: 0
    });

    /**
     * Make it Return in the screen
     */
    gsap.to(dragonRef.current.position, {
      y: -0.5,
      duration: 1.25,
      ease: 'power1.out'
    });
  };

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group ref={dragonRef} position-y={-0.5} scale={0}>
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

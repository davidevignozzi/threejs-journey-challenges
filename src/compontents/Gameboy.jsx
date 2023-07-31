import { useRef } from 'react';
import { useControls, button } from 'leva';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const Gameboy = () => {
  /**
   * Debug
   */
  // Colors
  const debugColor = useControls('Colors', {
    gameboy: '#f7f7f7',
    primaryButtons: '#c13333',
    secondaryButtons: '#333333',
    joystick: '#333333',
    screenBorder: '#a9a9a9',
    screen: '#4dff4d',
    controls: '#333333'
  });

  // Trigger Animation
  const animationTrigger = useControls('Animations Joystick', {
    next: button(() => {
      nextAnimation();
    }),
    prev: button(() => {
      prevAnimation();
    })
  });
  //-- End Debug

  /**
   * States & Refs
   */
  const joystickRef = useRef();

  /**
   * Models
   */
  const { nodes } = useGLTF('models/gameboy.glb');

  /**
   * Materials
   */
  const gameboyMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.gameboy,
    roughness: 0.5
  });

  const primaryButtonsMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.primaryButtons,
    roughness: 0.5
  });

  const secondaryButtonsMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.secondaryButtons,
    roughness: 0.5
  });

  const joystickMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.joystick,
    roughness: 0.5
  });

  const screenBorderMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.screenBorder,
    roughness: 0.5
  });

  const screenMaterial = new THREE.MeshStandardMaterial({
    color: debugColor.screen,
    emissive: debugColor.screen,
    emissiveIntensity: 0.75,
    roughness: 0.5,
    toneMapped: false
  });

  /**
   * Animations
   */

  const nextAnimation = () => {
    gsap.to(joystickRef?.current?.rotation, {
      z: -0.125,
      duration: 0.35,
      repeat: 1,
      yoyo: true,
      ease: 'power1.in'
    });
  };

  const prevAnimation = () => {
    gsap.to(joystickRef?.current?.rotation, {
      z: 0.125,
      duration: 0.35,
      repeat: 1,
      yoyo: true,
      ease: 'power1.in'
    });
  };

  return (
    <RigidBody type="fixed">
      <group position-y={-0.5} dispose={null}>
        {/* Gameboy */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboy.geometry}
          material={gameboyMaterial}
        />

        {/* Gameboy - Screen Borer */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyScreenBorder.geometry}
          material={screenBorderMaterial}
          position={nodes.gameboyScreenBorder.position}
          scale={nodes.gameboyScreenBorder.scale}
        />

        {/* Gameboy - Screen */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyScreen.geometry}
          material={screenMaterial}
          position={nodes.gameboyScreen.position}
          scale={nodes.gameboyScreen.scale}
        />

        {/* Gameboy - JoyStick */}
        <mesh
          ref={joystickRef}
          castShadow
          receiveShadow
          geometry={nodes.gameboyJoystick.geometry}
          material={joystickMaterial}
          position={nodes.gameboyJoystick.position}
          scale={nodes.gameboyJoystick.scale}
        />

        {/* Gameboy - A */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyA.geometry}
          material={primaryButtonsMaterial}
          position={nodes.gameboyA.position}
          scale={nodes.gameboyA.scale}
        />

        {/* Gameboy - B */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyB.geometry}
          material={primaryButtonsMaterial}
          position={nodes.gameboyB.position}
          scale={nodes.gameboyB.scale}
        />

        {/* Gameboy - Start */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyStart.geometry}
          material={secondaryButtonsMaterial}
          position={nodes.gameboyStart.position}
          rotation={nodes.gameboyStart.rotation}
          scale={nodes.gameboyStart.scale}
        />

        {/* Gameboy - Select */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboySelect.geometry}
          material={secondaryButtonsMaterial}
          position={nodes.gameboySelect.position}
          rotation={nodes.gameboySelect.rotation}
          scale={nodes.gameboySelect.scale}
        />

        {/* Gameboy - Battery */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyBattery.geometry}
          material={nodes.gameboyBattery.material}
          position={nodes.gameboyBattery.position}
          scale={nodes.gameboyBattery.scale}
        />
      </group>
    </RigidBody>
  );
};

useGLTF.preload('models/gameboy.glb');

export default Gameboy;

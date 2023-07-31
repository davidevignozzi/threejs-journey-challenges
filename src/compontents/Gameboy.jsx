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
        <mesh castShadow receiveShadow geometry={nodes.gameboy.geometry}>
          <meshStandardMaterial
            color={debugColor.gameboy}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - Screen Borer */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyScreenBorder.geometry}
          position={nodes.gameboyScreenBorder.position}
          scale={nodes.gameboyScreenBorder.scale}
        >
          <meshStandardMaterial
            color={debugColor.screenBorder}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - Screen */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyScreen.geometry}
          position={nodes.gameboyScreen.position}
          scale={nodes.gameboyScreen.scale}
        >
          <meshStandardMaterial
            color={debugColor.screen}
            emissive={debugColor.screen}
            emissiveIntensity={0.75}
            roughness={0.5}
            toneMapped={false}
          />
        </mesh>

        {/* Gameboy - JoyStick */}
        <mesh
          ref={joystickRef}
          castShadow
          receiveShadow
          geometry={nodes.gameboyJoystick.geometry}
          position={nodes.gameboyJoystick.position}
          scale={nodes.gameboyJoystick.scale}
        >
          <meshStandardMaterial
            color={debugColor.joystick}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - A */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyA.geometry}
          position={nodes.gameboyA.position}
          scale={nodes.gameboyA.scale}
        >
          <meshStandardMaterial
            color={debugColor.primaryButtons}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - B */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyB.geometry}
          position={nodes.gameboyB.position}
          scale={nodes.gameboyB.scale}
        >
          <meshStandardMaterial
            color={debugColor.primaryButtons}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - Start */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyStart.geometry}
          position={nodes.gameboyStart.position}
          rotation={nodes.gameboyStart.rotation}
          scale={nodes.gameboyStart.scale}
        >
          <meshStandardMaterial
            color={debugColor.secondaryButtons}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - Select */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboySelect.geometry}
          position={nodes.gameboySelect.position}
          rotation={nodes.gameboySelect.rotation}
          scale={nodes.gameboySelect.scale}
        >
          <meshStandardMaterial
            color={debugColor.secondaryButtons}
            roughness={0.5}
          />
        </mesh>

        {/* Gameboy - Battery */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gameboyBattery.geometry}
          position={nodes.gameboyBattery.position}
          scale={nodes.gameboyBattery.scale}
        >
          <meshStandardMaterial
            color={debugColor.screenBorder}
            roughness={0.5}
          />
        </mesh>
      </group>
    </RigidBody>
  );
};

useGLTF.preload('models/gameboy.glb');

export default Gameboy;

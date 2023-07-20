import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

import React from 'react';
import { useControls } from 'leva';

const Gameboy = () => {
  const { nodes } = useGLTF('models/gameboy.glb');

  const debugColor = useControls('Colors', {
    gameboy: '#f7f7f7',
    primaryButtons: '#c13333',
    secondaryButtons: '#333333',
    joystick: '#333333',
    screenBorder: '#a9a9a9',
    controls: '#333333'
  });

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

  return (
    <group dispose={null}>
      {/* Gameboy */}
      <mesh castShadow receiveShadow geometry={nodes.gameboy.geometry} material={gameboyMaterial} />

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
        material={nodes.gameboyScreen.material}
        position={nodes.gameboyScreen.position}
        scale={nodes.gameboyScreen.scale}
      />

      {/* Gameboy - JoyStick */}
      <mesh
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
  );
};

useGLTF.preload('models/gameboy.glb');

export default Gameboy;

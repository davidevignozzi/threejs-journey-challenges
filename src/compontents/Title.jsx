import * as THREE from 'three';
import { Text3D } from '@react-three/drei';
import useGameSelection from '../stores/useGameSelection';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';

const Title = () => {
  /**
   * States & Refs
   */
  const rigidBodyRef = useRef();

  /**
   * Fonts
   */
  const bangersFont = '/fonts/Bangers/Bangers_Regular.json';

  /**
   * UseGameSelection
   */
  const gameSelected = useGameSelection((state) => state.gameSelected);

  /**
   * Text Position
   * ( -x => CuoidCollider args.x )
   *
   */
  const textPosition = new THREE.Vector3();
  gameSelected === 'pokemon' && textPosition.set(-4, -0.75, -0.25);
  gameSelected === 'tetris' && textPosition.set(-2.9, -0.75, -0.25);
  gameSelected === 'super mario' && textPosition.set(-5.7, -0.75, -0.25);

  /**
   * When game selected change, the text jump
   */
  useEffect(() => {
    rigidBodyRef?.current?.applyImpulse({ x: 0, y: 20, z: 0 });
  }, [gameSelected]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      position={[-4.5, 0.3, 0]}
      rotation-y={Math.PI / 2}
      colliders={false}
    >
      <CuboidCollider args={[-textPosition.x, 0.8, 0.25]} />

      <Text3D
        position={textPosition}
        font={bangersFont}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.01}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={0.2}
        size={1.5}
      >
        {gameSelected}
        <meshStandardMaterial />
      </Text3D>
    </RigidBody>
  );
};

export default Title;

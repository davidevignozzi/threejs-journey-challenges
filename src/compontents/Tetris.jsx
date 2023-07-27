import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

const scale = 0.5;
const positionY = 4;

/**
 * Each Cube has
 * positionX and positionY
 * to create tetris shapes
 */

/**
 * Then each block has
 * x,y,z
 * to position the tetris shape randomly in the scene
 *
 */

const Cube = ({ positionX = 0, positionY = 0, color }) => {
  return (
    <mesh position-x={positionX} position-y={positionY} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const IBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, y, z]}>
      <Cube positionY={scale * 2} color={'red'} />
      <Cube positionY={scale} color={'red'} />
      <Cube color={'red'} />
      <Cube positionY={-scale} color={'red'} />
    </RigidBody>
  );
};

const TBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, y, z]}>
      <Cube positionX={scale} color={'cyan'} />
      <Cube positionX={-scale} color={'cyan'} />
      <Cube color={'cyan'} />
      <Cube positionY={-scale} color={'cyan'} />
    </RigidBody>
  );
};

const JBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, y, z]}>
      <Cube positionY={scale} color={'orange'} />
      <Cube color={'orange'} />
      <Cube positionX={scale} color={'orange'} />
      <Cube positionX={scale * 2} color={'orange'} />
    </RigidBody>
  );
};

const OBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[-0.25 + x, y, z]}>
      <Cube color={'mediumpurple'} />
      <Cube positionX={scale} color={'mediumpurple'} />
      <Cube positionX={scale} positionY={scale} color={'mediumpurple'} />
      <Cube positionY={scale} color={'mediumpurple'} />
    </RigidBody>
  );
};

const SBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, y, z]}>
      <Cube positionX={-scale} positionY={scale} color={'greenyellow'} />
      <Cube positionY={scale} color={'greenyellow'} />
      <Cube color={'greenyellow'} />
      <Cube positionX={scale} color={'greenyellow'} />
    </RigidBody>
  );
};

const Tetris = ({
  count = 25,
  types = [IBlock, TBlock, JBlock, OBlock, SBlock]
}) => {
  /**
   * Generate an array of random blocks
   */
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
  }, [count, types]);

  return (
    <group>
      {blocks.map((TetrisItem, index) => {
        return (
          <TetrisItem
            key={index}
            x={Math.random() * 10 - 5}
            y={index + 4}
            z={Math.random() * 10 - 5}
          />
        );
      })}
    </group>
  );
};

export default Tetris;

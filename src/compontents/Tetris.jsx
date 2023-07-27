import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

const scale = 0.5;
const positionY = 4;

const Block = ({ positionX = 0, positionY = 0, color }) => {
  return (
    <mesh position-x={positionX} position-y={positionY} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const IBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, positionY + y, z]}>
      <Block positionY={scale * 2} color={'red'} />
      <Block positionY={scale} color={'red'} />
      <Block color={'red'} />
      <Block positionY={-scale} color={'red'} />
    </RigidBody>
  );
};

const TBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, positionY + y, z]}>
      <Block positionX={scale} color={'cyan'} />
      <Block positionX={-scale} color={'cyan'} />
      <Block color={'cyan'} />
      <Block positionY={-scale} color={'cyan'} />
    </RigidBody>
  );
};

const JBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, positionY + y, z]}>
      <Block positionY={scale} color={'orange'} />
      <Block color={'orange'} />
      <Block positionX={scale} color={'orange'} />
      <Block positionX={scale * 2} color={'orange'} />
    </RigidBody>
  );
};

const OBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[-0.25 + x, positionY + y, z]}>
      <Block color={'mediumpurple'} />
      <Block positionX={scale} color={'mediumpurple'} />
      <Block positionX={scale} positionY={scale} color={'mediumpurple'} />
      <Block positionY={scale} color={'mediumpurple'} />
    </RigidBody>
  );
};

const SBlock = ({ x = 0, y = 0, z = 0 }) => {
  return (
    <RigidBody position={[x, positionY + y, z]}>
      <Block positionX={-scale} positionY={scale} color={'greenyellow'} />
      <Block positionY={scale} color={'greenyellow'} />
      <Block color={'greenyellow'} />
      <Block positionX={scale} color={'greenyellow'} />
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
            y={index}
            z={Math.random() * 10 - 5}
          />
        );
      })}
    </group>
  );
};

export default Tetris;

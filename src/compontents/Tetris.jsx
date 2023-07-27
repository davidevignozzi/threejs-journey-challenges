import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

const scale = 0.5;
const positionY = 4;

const Block = ({ positionX = 0, positionY = 0 }) => {
  return (
    <mesh position-x={positionX} position-y={positionY} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

const IBlock = ({ startPositionY = 0 }) => {
  return (
    <RigidBody position-y={positionY + startPositionY}>
      <Block positionY={scale * 2} />
      <Block positionY={scale} />
      <Block />
      <Block positionY={-scale} />
    </RigidBody>
  );
};

const TBlock = ({ startPositionY = 0 }) => {
  return (
    <RigidBody position-y={positionY + startPositionY}>
      <Block positionX={scale} />
      <Block positionX={-scale} />
      <Block />
      <Block positionY={-scale} />
    </RigidBody>
  );
};

const JBlock = ({ startPositionY = 0 }) => {
  return (
    <RigidBody position-y={positionY + startPositionY}>
      <Block positionY={scale} />
      <Block />
      <Block positionX={scale} />
      <Block positionX={scale * 2} />
    </RigidBody>
  );
};

const OBlock = ({ startPositionY = 0 }) => {
  return (
    <RigidBody position-x={-0.25} position-y={positionY + startPositionY}>
      <Block />
      <Block positionX={scale} />
      <Block positionX={scale} positionY={scale} />
      <Block positionY={scale} />
    </RigidBody>
  );
};

const SBlock = ({ startPositionY = 0 }) => {
  return (
    <RigidBody position-y={positionY + startPositionY}>
      <Block positionX={-scale} positionY={scale} />
      <Block positionY={scale} />
      <Block />
      <Block positionX={scale} />
    </RigidBody>
  );
};

const Tetris = ({
  count = 10,
  types = [IBlock, TBlock, JBlock, OBlock, SBlock]
}) => {
  /**
   *
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
      {/* <IBlock />
      <TBlock />
      <JBlock />
      <OBlock />
      <SBlock /> */}

      {blocks.map((TetrisItem, index) => {
        return (
          <TetrisItem key={index} startPositionY={index + Math.random()} />
        );
      })}
    </group>
  );
};

export default Tetris;

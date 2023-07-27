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

const IBlock = () => {
  return (
    <group position-y={positionY}>
      <Block positionY={scale * 2} />
      <Block positionY={scale} />
      <Block />
      <Block positionY={-scale} />
    </group>
  );
};

const TBlock = () => {
  return (
    <group position-y={positionY}>
      <Block positionX={scale} />
      <Block positionX={-scale} />
      <Block />
      <Block positionY={-scale} />
    </group>
  );
};

const JBlock = () => {
  return (
    <group position-y={positionY}>
      <Block positionY={scale} />
      <Block />
      <Block positionX={scale} />
      <Block positionX={scale * 2} />
    </group>
  );
};

const OBlock = () => {
  return (
    <group position-x={-0.25} position-y={positionY}>
      <Block />
      <Block positionX={scale} />
      <Block positionX={scale} positionY={scale} />
      <Block positionY={scale} />
    </group>
  );
};

const SBlock = () => {
  return (
    <group position-y={positionY}>
      <Block positionX={-scale} positionY={scale} />
      <Block positionY={scale} />
      <Block />
      <Block positionX={scale} />
    </group>
  );
};

const Tetris = () => {
  return (
    <group>
      <IBlock />
      <TBlock />
      <JBlock />
      <OBlock />
      <SBlock />
    </group>
  );
};

export default Tetris;

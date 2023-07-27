import { RigidBody } from '@react-three/rapier';

const Base = () => {
  return (
    <RigidBody type="fixed">
      <mesh rotation-x={(Math.PI / 2) * 3} position-y={-0.5}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
  );
};

export default Base;

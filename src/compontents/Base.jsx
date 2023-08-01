import { RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';

const Base = () => {
  const baseColor = useControls('Base Color', {
    color: '#ffffff'
  });

  return (
    <RigidBody type="fixed">
      <mesh rotation-x={(Math.PI / 2) * 3} position-y={-0.5}>
        <planeGeometry args={[11.5, 11.5]} />
        <meshStandardMaterial color={baseColor.color} />
      </mesh>
    </RigidBody>
  );
};

export default Base;

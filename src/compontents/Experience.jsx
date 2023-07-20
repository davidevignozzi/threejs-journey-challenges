import { Environment, OrbitControls } from '@react-three/drei';
import Gameboy from './Gameboy';

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="apartment" />
      <Gameboy />
    </>
  );
};

export default Experience;

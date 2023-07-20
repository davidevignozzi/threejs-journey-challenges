import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Gameboy from './Gameboy';

const Experience = () => {
  return (
    <>
      <Environment preset="apartment" />
      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
      <OrbitControls />
      <Center>
        <Gameboy />
      </Center>
    </>
  );
};

export default Experience;

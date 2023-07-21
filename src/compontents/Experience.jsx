import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Gameboy from './Gameboy';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

const Experience = () => {
  const debugCamera = useControls('Camera Position', {
    x: 5,
    y: 5,
    z: 5
  });

  useFrame((state) => {
    state.camera.position.set(debugCamera.x, debugCamera.y, debugCamera.z);
  });

  return (
    <>
      <OrbitControls />

      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>

      <Environment preset="apartment" />

      <Center>
        <Gameboy />
      </Center>
    </>
  );
};

export default Experience;

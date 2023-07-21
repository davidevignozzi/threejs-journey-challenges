import { Center, OrbitControls, Stage } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Gameboy from './Gameboy';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Experience = () => {
  /**
   * Debug Camera Position
   */
  // const debugCamera = useControls('Camera Position', {
  //   x: 5,
  //   y: 5,
  //   z: 5
  // });

  // useFrame((state) => {
  //   state.camera.position.set(debugCamera.x, debugCamera.y, debugCamera.z);
  // });

  return (
    <>
      <OrbitControls />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.25} />
      </EffectComposer>

      <Center>
        <Stage
          shadows="contact"
          adjustCamera={5}
          environment="apartment"
          preset="soft"
          intensity={0.2}
        >
          <Gameboy />
        </Stage>
      </Center>
    </>
  );
};

export default Experience;

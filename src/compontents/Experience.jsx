import { OrbitControls, Stage } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import Gameboy from './Gameboy';
import DragonEvolved from './DragonEvolved';

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

      <Stage
        shadows="contact"
        adjustCamera={5}
        intensity={0.2}
        environment="apartment"
        preset="soft"
      >
        <Gameboy />
        <DragonEvolved />
      </Stage>
    </>
  );
};

export default Experience;

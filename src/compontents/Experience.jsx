import { Environment, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Physics } from '@react-three/rapier';
import Gameboy from './Gameboy';
import Base from './Base';
import DragonEvolved from './DragonEvolved';
import Tetris from './Tetris';

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

      <Environment preset="apartment" />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.25} />
      </EffectComposer>

      <Physics debug>
        <Base />
        <Gameboy />
        <DragonEvolved />
        <Tetris />
      </Physics>
    </>
  );
};

export default Experience;

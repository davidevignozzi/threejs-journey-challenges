import { button, useControls } from 'leva';
import { Physics } from '@react-three/rapier';
import { Environment, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import useGameSelection from '../stores/useGameSelection';
import Gameboy from './Gameboy';
import Base from './Base';
import DragonEvolved from './DragonEvolved';
import Tetris from './Tetris';
import SuperMario from './SuperMario';
import Title from './Title';

const Experience = () => {
  const games = useGameSelection((state) => state.games);
  const gameIndex = useGameSelection((state) => state.gameIndex);
  const gameSelected = useGameSelection((state) => state.gameSelected);
  // const gameSelected = games[gameIndex];

  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);

  const debugGame = useControls('Change Game', {
    prevGame: button(() => {
      prevGame();
    }),
    nextGame: button(() => {
      nextGame();
    })
  });

  return (
    <>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />

      <Environment preset="apartment" />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.25} />
      </EffectComposer>

      <Physics
      // debug
      >
        <Base />
        <Gameboy />
        <Title />

        <DragonEvolved />
        <Tetris />
        <SuperMario />
      </Physics>
    </>
  );
};

export default Experience;

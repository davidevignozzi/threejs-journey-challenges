import React, { useState } from 'react';
import '../style/interface.css';
import useGameSelection from '../stores/useGameSelection';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';

const Interface = () => {
  const gameSelected = useGameSelection((state) => state.gameSelected);
  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);
  const dragonEnterAnimation = useGameSelection(
    (state) => state.dragonEnterAnimation
  );
  const dragonHideAnimation = useGameSelection(
    (state) => state.dragonHideAnimation
  );
  const tetrisFall = useGameSelection((state) => state.tetrisFall);
  const superMarioCubeAnimation = useGameSelection(
    (state) => state.superMarioCubeAnimation
  );

  const [isDragonInTheScene, setIsDragonInTheScene] = useState(false);

  /**
   * Handle animation
   */
  const handleAnimation = () => {
    switch (gameSelected) {
      case 'pokemon':
        isDragonInTheScene
          ? (dragonHideAnimation(), setIsDragonInTheScene(false))
          : (dragonEnterAnimation(), setIsDragonInTheScene(true));
        break;

      case 'tetris':
        tetrisFall();
        break;

      case 'super mario':
        superMarioCubeAnimation();

      default:
        break;
    }
  };

  return (
    <div id="interface">
      <div className="controls">
        <button className="prev" onClick={prevGame}>
          <GrFormPreviousLink />
        </button>

        <button onClick={handleAnimation} className="animate">
          A
        </button>

        <button className="next" onClick={nextGame}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default Interface;

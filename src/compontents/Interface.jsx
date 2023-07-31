import React, { useState } from 'react';
import '../style/interface.css';
import useGameSelection from '../stores/useGameSelection';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';

const Interface = () => {
  const gameSelected = useGameSelection((state) => state.gameSelected);
  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);

  /**
   * Clear
   */
  const clearAnimation = useGameSelection((state) => state.clearAnimation);

  /**
   * Pokemon
   */
  const dragonEnterAnimation = useGameSelection(
    (state) => state.dragonEnterAnimation
  );
  const dragonHideAnimation = useGameSelection(
    (state) => state.dragonHideAnimation
  );

  /**
   * Tetris
   */
  const tetrisFall = useGameSelection((state) => state.tetrisFall);
  const tetrisHide = useGameSelection((state) => state.tetrisHide);

  /**
   * Mario
   */
  const superMarioCubeAnimation = useGameSelection(
    (state) => state.superMarioCubeAnimation
  );

  const [isDragonInTheScene, setIsDragonInTheScene] = useState(false);
  const [isTetrisInTheScene, setIsTetrisInTheScene] = useState(false);

  /**
   * Handle animation
   */
  const handleAnimation = () => {
    // Always Clear
    clearAnimation();

    switch (gameSelected) {
      // pokemon
      case 'pokemon':
        isDragonInTheScene
          ? (dragonHideAnimation(), setIsDragonInTheScene(false))
          : (dragonEnterAnimation(), setIsDragonInTheScene(true));
        break;

      // tetris
      case 'tetris':
        isTetrisInTheScene
          ? (tetrisHide(), setIsTetrisInTheScene(false))
          : (tetrisFall(), setIsTetrisInTheScene(true));

        break;

      // super mario
      case 'super mario':
        superMarioCubeAnimation();

      default:
        setIsDragonInTheScene(false);
        break;
    }
  };

  const handleNext = () => {
    clearAnimation();
    setIsDragonInTheScene(false);
    setIsTetrisInTheScene(false);
    nextGame();
  };

  const handlePrev = () => {
    clearAnimation();
    setIsDragonInTheScene(false);
    setIsTetrisInTheScene(false);
    prevGame();
  };

  return (
    <div id="interface">
      <div className="controls">
        <button className="prev" onClick={handlePrev}>
          <GrFormPreviousLink />
        </button>

        <button onClick={handleAnimation} className="animate">
          A
        </button>

        <button className="next" onClick={handleNext}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default Interface;

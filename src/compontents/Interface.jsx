import { useState, useRef } from 'react';
import '../style/interface.css';
import useGameSelection from '../stores/useGameSelection';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';

const Interface = () => {
  const [isGameSelected, setIsGameSelected] = useState(false);
  const buttonAnimation = useRef();

  /**
   * Use Game Selection
   */
  const gameSelected = useGameSelection((state) => state.gameSelected);
  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);

  /**
   * Pokemon
   */
  const dragonEnterAnimation = useGameSelection(
    (state) => state.dragonEnterAnimation
  );
  const dragonHideAnimation = useGameSelection(
    (state) => state.dragonHideAnimation
  );
  const isDragonVisible = useGameSelection(
    (state) => state.isDragonVisible
  );

  /**
   * Tetris
   */
  const tetrisFall = useGameSelection((state) => state.tetrisFall);
  const tetrisHide = useGameSelection((state) => state.tetrisHide);
  const isTetrisVisible = useGameSelection(
    (state) => state.isTetrisVisible
  );

  /**
   * Mario
   */
  const superMarioCubeAnimation = useGameSelection(
    (state) => state.superMarioCubeAnimation
  );

  /**
   * Handle animation
   */
  const handleAnimation = () => {
    // Always Clear

    switch (gameSelected) {
      // pokemon
      case 'pokemon':
        isDragonVisible ? dragonHideAnimation() : dragonEnterAnimation();
        break;

      // tetris
      case 'tetris':
        isTetrisVisible ? tetrisHide() : tetrisFall();
        break;

      // super mario
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

        <button
          ref={buttonAnimation}
          // className="animate"
          className={`animate ${gameSelected !== '' && 'bg-red'}`}
          onClick={handleAnimation}
        >
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

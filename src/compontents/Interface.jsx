import React from 'react';
import '../style/interface.css';
import useGameSelection from '../stores/useGameSelection';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';

const Interface = () => {
  const gameSelected = useGameSelection((state) => state.gameSelected);
  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);

  return (
    <div id="interface">
      <div className="controls">
        <button className="prev" onClick={prevGame}>
          <GrFormPreviousLink />
        </button>

        <button className="animate">A</button>

        <button className="next" onClick={nextGame}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default Interface;

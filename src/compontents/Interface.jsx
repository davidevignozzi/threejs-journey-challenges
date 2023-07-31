import React from 'react';
import '../style/interface.css';
import useGameSelection from '../stores/useGameSelection';

const Interface = () => {
  const prevGame = useGameSelection((state) => state.prevGame);
  const nextGame = useGameSelection((state) => state.nextGame);

  return (
    <div id="interface">
      <div className="controls">
        <button className="prev" onClick={prevGame}></button>
        <button className="next" onClick={nextGame}></button>
      </div>
    </div>
  );
};

export default Interface;

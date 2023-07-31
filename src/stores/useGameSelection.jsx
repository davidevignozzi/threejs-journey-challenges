import { create } from 'zustand';

export default create((set) => {
  return {
    /**
     * Games
     */
    games: ['pokemon', 'super mario', 'tetris'],

    gameIndex: 0,

    gameSelected: '',

    changeGame: () =>
      set((state) => {
        if (state.gameIndex === state.games.length - 1) {
          return {
            gameIndex: 0,
            gameSelected: state.games[state.gameIndex]
          };
        } else {
          return {
            gameIndex: state.gameIndex + 1,
            gameSelected: state.games[state.gameIndex]
          };
        }
      })
  };
});

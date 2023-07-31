import { create } from 'zustand';

export default create((set) => {
  return {
    /**
     * Games
     */
    games: ['pokemon', 'super mario', 'tetris'],

    gameIndex: 0,

    gameSelected: '',

    nextGame: () =>
      set((state) => {
        if (state.gameIndex === state.games.length - 1) {
          return {
            gameIndex: 0,
            gameSelected: state.games[0]
          };
        } else {
          return {
            gameIndex: state.gameIndex + 1,
            gameSelected: state.games[state.gameIndex + 1]
          };
        }
      }),

    prevGame: () =>
      set((state) => {
        if (state.gameIndex === 0) {
          return {
            gameIndex: state.games.length - 1,
            gameSelected: state.games[state.games.length - 1]
          };
        } else {
          return {
            gameIndex: state.gameIndex - 1,
            gameSelected: state.games[state.gameIndex - 1]
          };
        }
      })
  };
});

import { create } from 'zustand';

export default create((set) => {
  return {
    /**
     * Games
     */
    games: ['pokemon', 'super_mario', 'tetris'],

    gameIndex: 0,

    changeGame: () =>
      set((state) => {
        if (state.gameIndex === state.games.length - 1) {
          return { gameIndex: 0 };
        } else {
          return { gameIndex: state.gameIndex + 1 };
        }
      })
  };
});

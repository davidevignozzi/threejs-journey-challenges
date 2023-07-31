import { create } from 'zustand';

export default create((set) => {
  return {
    /**
     * Games
     */
    games: ['pokemon', 'super mario', 'tetris'],

    gameIndex: 0,

    gameSelected: '',

    gameboyPrevOrNext: '',

    animation: '',

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
      }),

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

    /**
     * Animations
     *
     */
    //Dragon
    dragonEnterAnimation: () => set({ animation: 'dragonEnterAnimation' }),
    dragonHideAnimation: () => set({ animation: 'dragonHideAnimation' }),

    // Tetris
    tetrisFall: () => set({ animation: 'tetrisFall' }),

    // Super Mario
    superMarioCubeAnimation: () =>
      set({ animation: 'superMarioCubeAnimation' })
  };
});

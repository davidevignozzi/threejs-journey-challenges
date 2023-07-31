import { create } from 'zustand';

export default create((set) => {
  return {
    /**
     * Games
     */
    games: ['pokemon', 'super mario', 'tetris'],

    gameIndex: 0,

    gameSelected: '',

    isDragonVisible: false,

    isTetrisVisible: false,

    animation: '',

    prevGame: () =>
      set((state) => {
        if (state.gameIndex === 0) {
          return {
            gameIndex: state.games.length - 1,
            gameSelected: state.games[state.games.length - 1],
            animation: '',
            isDragonVisible: false,
            isTetrisVisible: false
          };
        } else {
          return {
            gameIndex: state.gameIndex - 1,
            gameSelected: state.games[state.gameIndex - 1],
            animation: '',
            isDragonVisible: false,
            isTetrisVisible: false
          };
        }
      }),

    nextGame: () =>
      set((state) => {
        if (state.gameIndex === state.games.length - 1) {
          return {
            gameIndex: 0,
            gameSelected: state.games[0],
            animation: '',
            isDragonVisible: false,
            isTetrisVisible: false
          };
        } else {
          return {
            gameIndex: state.gameIndex + 1,
            gameSelected: state.games[state.gameIndex + 1],
            animation: '',
            isDragonVisible: false,
            isTetrisVisible: false
          };
        }
      }),

    /**
     * Animations
     *
     */
    // Pokemon
    dragonEnterAnimation: () =>
      set({ animation: 'dragonEnterAnimation', isDragonVisible: true }),
    dragonHideAnimation: () =>
      set({ animation: 'dragonHideAnimation', isDragonVisible: false }),

    // Tetris
    tetrisFall: () =>
      set({ animation: 'tetrisFall', isTetrisVisible: true }),
    tetrisHide: () =>
      set({ animation: 'tetrisHide', isTetrisVisible: false }),

    // Super Mario
    superMarioCubeAnimation: () =>
      set({ animation: 'superMarioCubeAnimation' }),

    clearAnimation: () => set({ animation: '' })
  };
});

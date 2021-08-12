const UserStore = {
  namespaced: true,

  state() {
    return {
      currentTheme: 'light',
    };
  },

  mutations: {
    setTheme(state, theme) {
      state.currentTheme = theme;
    },
  },

  actions: {
    setTheme({ commit }, theme) {
      commit('setTheme', theme);
    },
  },

  getters: {
    currentTheme(state) {
      return state.currentTheme;
    },
  },
};

export default UserStore;

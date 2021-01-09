export const state = () => ({
  isLoading: true
});

export const getters = {
  isLoading(state) {
    return state.isLoading;
  }
};

export const mutations = {
  set(state) {
    state.isLoading = true;
  },

  reset(state) {
    state.isLoading = false;
  }
};

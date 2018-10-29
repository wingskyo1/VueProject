import * as types from './mutations_types.js';

//store
export const state = {
  loading: false,
}

//getters
export const getters ={
getLoading : state => state.loading
}
//actions
export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
}
//mutations
export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading;
  },
}


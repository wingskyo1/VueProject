import Vue from 'vue';
import Vuex from 'vuex';

import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';
import opendata from './modules/open1999';

import {state,getters, actions, mutations} from './root.js';


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    count,
    todo,
    shop,
    opendata
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})

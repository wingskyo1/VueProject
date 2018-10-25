import Vue from 'vue';
import Vuex from 'vuex';

import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';


Vue.use(Vuex);

export default new Vuex.Store({
 // state,
  // mutations,
  // getters,
  // actions,
  modules: {
    count,
    todo,
    shop
  },
  strict: true
})

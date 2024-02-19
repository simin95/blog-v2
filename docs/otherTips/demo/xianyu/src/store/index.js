import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [createLogger()]
});

export default store
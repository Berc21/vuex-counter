import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementifEven({commit, state }) {
    if( (state.count + 1) % 2 === 0 ) {
      commit('increment')
    }
  }
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
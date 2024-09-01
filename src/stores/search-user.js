import { createStore } from 'vuex'

const state = {
  users: []
}

const mutations = {
  fill(state, payload) {
    state.users = payload
  }
}

const actions = {
  fillUsers({ commit }, payload) {
    commit('fill', payload)
  }
}

export default createStore({
  state,
  actions,
  mutations
})

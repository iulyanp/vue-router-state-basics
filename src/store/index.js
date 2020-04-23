import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: 'matt',
      fullName: 'Matt Maribojoc'
    }
  },
  mutations: {
    changeName (state, payload) {
      state.user.fullName = payload.name
    }
  },
  actions: {
    changeName (context, payload) {
      context.commit('changeName', payload)
    }
  },
  getters: {
    firstName: state => {
      return state.user.fullName.split(' ')[0]
    },
    fullName: state => {
      return state.user.fullName
    }
  },
  modules: {

  }
})

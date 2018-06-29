import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: null
  },
  mutations: {
    setItems (state, items) {
      state.items = items
    }
  },
  actions: {
    async getItems ({commit}) {
      const res = await axios.get('http://localhost:8080/items/unreturned')
      console.log(res.data)
      commit('setItems', res.data)
    }
  },
  getters: {
    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
    getFiliteredItems: (place) => (state) => {
      return state.items.filter(item => true)
    }
  }
})

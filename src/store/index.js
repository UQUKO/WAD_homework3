import { createStore } from 'vuex'
import data from "@/data/posts.json"
export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getData(state) {
      return state.posts || [];
    },
  },
  mutations: {
    setData(state, payload) {
      state.posts = payload; // Update the state with fetched data
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        /*const response = await fetch("src/data/posts.json");
        const posts = await response.json();*/
        const posts = data;
        commit("setData", posts); // Commit data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  modules: {
  }
})

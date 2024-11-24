// store.js

import { createStore } from 'vuex'
//import data from "@/data/posts.json"
import createPersistedState from "vuex-persistedstate";

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
      state.posts = payload;
    },
    toggleLike(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.isLiked = !post.isLiked;
        post.postLikes = post.isLiked ? post.postLikes + 1 : post.postLikes - 1;
      }
    },
    resetAllLikes(state) {
      state.posts.forEach(post => {
        post.postLikes = 0;
        post.isLiked = false; 
      });
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch("https://api.npoint.io/24d406998945ce3f7d36");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json(); 
        commit("setData", posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    toggleLike({ commit }, postId) {
      commit("toggleLike", postId);
    },
    resetAllLikes({ commit }) {
      commit("resetAllLikes");
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ],
  modules: {}
});

// store.js

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
        const posts = data;
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
  modules: {}
});

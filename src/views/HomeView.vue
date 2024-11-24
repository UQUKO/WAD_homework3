<template>
  <div id="postsContainer">
    <post-component
      v-for="post in data"
      :key="post.id"
      :post="post"
    />
  </div>
  <div id="button-container">
      <button @click="resetAllLikes()">Reset Likes</button>
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    PostComponent
  },
  methods: {
    resetAllLikes: function() {
      return this.$store.dispatch("resetAllLikes");
    },
  },
  computed: {
    ...mapGetters(["getData"]),
    data() {
      return this.getData; 
    },
  },
  created() {
    if (this.getData.length === 0) {
      this.$store.dispatch("fetchData");
    }
  },
};

</script>

<style scoped>
#postsContainer {
  display: flex; 
  flex-direction: column; 
  gap: 1em; 
  align-items: center; 
  justify-content: center; 
  min-height: 100vh;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #45a049;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(130, 220, 135);
}

#button-container {
  display: flex; 
  flex-direction: column; 
  gap: 1em;
  padding-bottom: 1em;
  align-items: center; 
  justify-content: center;
}
</style>

<template>
  <div id="postsContainer">
    <post-component
      v-for="post in data"
      :key="post.dateCreated"
      :post="post"
    />
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
  computed: {
    ...mapGetters(["getData"]),
    data() {
      return this.getData; 
    },
  },
  created() {
    this.$store.dispatch("fetchData");
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
</style>

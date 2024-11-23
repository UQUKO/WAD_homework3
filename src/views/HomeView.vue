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
    ...mapGetters(["getData"]), // Map the Vuex getter to get the data
    data() {
      return this.getData; // Use the getter to access data
    },
  },
  created() {
    this.$store.dispatch("fetchData"); // Dispatch the action to fetch data
  },
};

</script>

<style scoped>
#postsContainer {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>

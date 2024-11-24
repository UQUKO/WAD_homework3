<template>
  <footer class="footer">
    <div class="footer-text">
      <h1>Group AD</h1>
    </div>
    
    <div class="button-container">
      <button v-if="isMainPage" @click="resetLikes">Reset Likes</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    isMainPage() {
      return this.$route.name === "home";
    }
  },
  methods: {
    resetAllLikes: function() {
      return this.$store.dispatch("resetAllLikes");
    },
    resetLikes() {
      this.resetAllLikes();
    }
  }
};
</script>

<style scoped>
footer {
  background-color: rgb(210, 205, 241);
  border-radius: 15px;
  margin: 1%;
  padding: 1%;
  font-size: medium;
  font-family: 'Dancing Script';
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.footer-text {
  flex-grow: 1;
  text-align: center;
  margin-left: 0%;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #45a049;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.button-container {
  position: absolute;
  right: 3em;
}
</style>
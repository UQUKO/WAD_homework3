<template>
  <div class="main-page">
    <HeaderComponent />

    <!-- todo: dynamically -->
    <div class="content">
      <PostComponent text="Component 1" />
      <PostComponent text="Component 2" />
      <PostComponent text="Component 3" />
      <PostComponent text="Component 4" />
      <PostComponent text="Component 5" />
      <PostComponent text="Component 6" />
      <PostComponent text="Component 7" />
      <PostComponent text="Component 8" />
      <PostComponent text="Component 9" />
      <PostComponent text="Component 10" />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import PostComponent from "./components/PostComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    PostComponent,
  },
};
</script>

<style>
.main-page {
  font-family: Arial, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  /* background-color: #9e9e9e; figure 1 on kasutatud seda bg colorit aga kole on imo.*/
}
</style>

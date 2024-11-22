<template>
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
  </template>
  
  <script>
  import PostComponent from "./PostComponent.vue";
  
  export default {
    name: "HomeComponent",
    components: {
      PostComponent,
    },
  };
  </script>
  
  <style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 2em;
  }
  </style>
  
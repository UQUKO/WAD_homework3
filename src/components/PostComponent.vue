<template>
  <div class="post">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid #000000;
  padding: 1em;
  width: 80%;
  background-color: #9e9e9e;
  text-align: center;
}
</style>

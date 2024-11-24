<template>
  <footer class="footer">
    <div class="footer-text">
      <h1>Group AD</h1>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
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

</style>
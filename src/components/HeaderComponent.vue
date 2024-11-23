<template>
  <div class="header">
    <h1>Group AD</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav>
  </div>
</template>

<style scoped>

.header {
    background-color: rgb(53, 126, 69);
    width: auto;
    margin: 1%;
    height: 10vh;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 15px;
    position: sticky;
    top: 0;
}

.navigation {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation li {
  display: inline;
  margin: 0 10px;
}
</style>
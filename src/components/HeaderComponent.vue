<template>
  <div class="header">
    <h1>Group AD</h1>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <span class="separator">|</span>
      <router-link to="/signup" class="link">Signup</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(53, 126, 69);
    width: auto;
    margin: 1%;
    height: 10vh;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    border-radius: 15px;
}

h1 {
    font-family: 'Dancing Script';
    font-size: 2em;
    position: absolute;
    left: 20px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  font-size: 1.75em;
  color: black;
  text-decoration: none;
  border-radius: 15px;
  padding: 10px 15px;
  margin-left: 5px;
  transition: background-color 0.1s, color 0.1s;
}

.link:hover {
  background-color: rgb(173, 225, 176);
  color: black;
}

.separator {
  font-size: 2.5em;
  color: black;
  margin: 0 10px;
}
</style>

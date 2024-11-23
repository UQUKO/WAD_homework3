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
  background-color: #9e9e9e;
  padding: 1em;
  text-align: center;
  position: sticky;
  top: 0;
  padding: 10px 16px;
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
<template>
  <header class="header">
    <h1>Group AD</h1>
    <nav>
      <ul class="navigation">
        <li><router-link to="/">Main</router-link></li>
        <li><router-link to="/signup">Sign up</router-link></li>

      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #9e9e9e;
  padding: 1em;
  text-align: center;
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
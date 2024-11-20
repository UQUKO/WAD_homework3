<template>
  <header class="header">
    <h1>Header Component</h1>
    <nav>
      <ul class="navigation">
        <li><a href="#">nav1</a></li>
        <li><a href="#">nav2</a></li>
        <li><a href="#">nav3</a></li>
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
<template>
  <div class="main-page">
    <div class="side-rectangle left"></div>
    <div class="side-rectangle right"></div>
    <header-component />
    <main>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>
.main-page {
  font-family: Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
  font-size: large;
  position: relative;
  display: flex;
  flex-direction: column;
}

.side-rectangle {
  position: absolute;
  top: 9em;
  bottom: 10em;
  width: 20%;
  background-color: rgb(252, 226, 230);
  border-radius: 20px;
  z-index: -1;
}

.side-rectangle.left {
  left: 1em;
}

.side-rectangle.right {
  right: 1em;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  background-color: cornsilk;
  width: 100%;
  box-sizing: border-box;
}

header-component, footer-component {
  width: 100%;
}
</style>
<template>
  <div class="main-page">
    <HeaderComponent />

    <router-view></router-view>


    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";


export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  }
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
  /*background-color: #9e9e9e; /* figure 1 on kasutatud seda bg colorit aga kole on imo.*/
}
</style>

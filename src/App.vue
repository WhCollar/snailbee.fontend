<script setup lang="ts">
import Header from "components/header.vue";
import Footer from "components/footer.vue";
</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<style>
body {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
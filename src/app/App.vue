<script setup lang="ts">
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
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
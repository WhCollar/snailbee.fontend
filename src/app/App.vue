<script setup lang="ts">
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
body {
  font-family: 'Josefin Sans', sans-serif;
}
</style>

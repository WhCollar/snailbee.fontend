<script setup lang="ts">
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Wrapper } from 'shared/ui';
</script>

<template>
  <Wrapper>
    <Header />
    <RouterView />
    <Footer />
  </Wrapper>
</template>

<style>
body {
  font-family: 'Josefin Sans', sans-serif;
}
</style>

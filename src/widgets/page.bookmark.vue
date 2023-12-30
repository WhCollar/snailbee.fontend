<script setup lang="ts">
import { Container } from 'shared/ui';
</script>

<template>
  <section class="py-10">
    <Container class="flex">
      <div class="w-fit p-5 ml-[-1000px] pl-[1000px] bg-pink-100 rounded-r-3xl">
        <slot />
      </div>
    </Container>
  </section>
</template>

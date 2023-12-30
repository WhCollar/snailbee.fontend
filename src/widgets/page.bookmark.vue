<script setup lang="ts">
import { Container } from 'shared/ui';
</script>

<template>
  <section class="py-10">
    <Container class="flex">
      <div
        class="w-fit py-3 px-7 ml-[-1000px] pl-[1000px] bg-rose-400 rounded-r-3xl"
      >
        <slot />
      </div>
    </Container>
  </section>
</template>

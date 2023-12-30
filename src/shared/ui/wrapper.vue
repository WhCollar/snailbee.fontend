<script setup lang="ts">
import { Background } from './assets';
</script>

<template>
  <div
    :style="{
      backgroundImage: `url('${Background}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <slot />
  </div>
</template>

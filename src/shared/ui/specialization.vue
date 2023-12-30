<script setup lang="ts">
defineProps<{
  index: number;
  text: string;
}>();
</script>

<template>
  <div class="flex my-3 max-md:text-center text-xl font-normal text-zinc-500">
    <div class="w-12 max-md:hidden">
      {{ `0${index + 1}` }}
    </div>
    <div class="w-full">
      {{ text }}
    </div>
  </div>
</template>

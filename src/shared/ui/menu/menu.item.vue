<script setup lang="ts">
import { Item } from './model';

defineProps<Item>();
const emit = defineEmits<{
  (e: 'click', data: { name: string; hash: string | undefined }): void;
}>();
</script>

<template>
  <div
    :class="{
      'font-medium text-lg cursor-pointer': true,
      'px-3 py-0.5 rounded-lg border border-zinc-400 text-center': asButton,
      'mr-10': !vertical,
      'mb-5': vertical,
    }"
    @click="() => emit('click', { name: routeName, hash: hash })"
  >
    <a>
      {{ label }}
    </a>
  </div>
</template>

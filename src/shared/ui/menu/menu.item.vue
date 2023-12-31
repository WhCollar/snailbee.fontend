<script setup lang="ts">
import { Item } from './model';

defineProps<Item>();
const emit = defineEmits<{
  (e: 'click', data: { name: string; hash: string | undefined }): void;
}>();
</script>

<template>
  <div
    class="font-large text-lg cursor-pointer"
    :class="{
      'py-0.5 px-3 rounded-lg border border-zinc-400 text-center': asButton,
      'mr-10': !vertical,
      'w-full mb-5': vertical,
    }"
    @click="() => emit('click', { name: routeName, hash: hash })"
  >
    <a>
      {{ label }}
    </a>
  </div>
</template>

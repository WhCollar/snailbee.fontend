<script setup lang="ts">
import {computed} from "vue";
import {Props, MasonryGridItem} from "./model";

const props = defineProps<Props>();

const items = computed(() => {
  let chunkLength = (props.items.length / 4) - 1;
  let chunks: MasonryGridItem[][] = [];
  let chunk: MasonryGridItem[] = [];
  
  props.items.forEach(item => {
    chunk.push(item);

    if (chunk.length > chunkLength) {
      chunks.push(chunk);
      chunk = [];
    }
  });
  chunks.push(chunk)

  return chunks;
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div class="grid gap-8" v-for="(chunk, index) in items" :key="index">
      <div v-for="(item, index) in chunk" :key="index">
        <img class="h-auto max-w-full rounded-3xl" :src="item.imageUrl" :alt="item.title">
        <div class="pl-2 text-xl text-zinc-700">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
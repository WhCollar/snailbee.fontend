<script setup lang="ts">
import { computed } from 'vue';
import { Props, MasonryGridItem } from './model';

const props = defineProps<Props>();

const items = computed(() => {
  let chunkLength = props.items.length / 4 - 1;
  let chunks: MasonryGridItem[][] = [];
  let chunk: MasonryGridItem[] = [];

  props.items.forEach((item) => {
    chunk.push(item);

    if (chunk.length > chunkLength) {
      chunks.push(chunk);
      chunk = [];
    }
  });
  chunks.push(chunk);

  return chunks;
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <template v-if="loading">
      <div class="grid gap-8" v-for="i in 4" :key="i">
        <div class="animate-pulse" v-for="j in 2" :key="j">
          <div
            class="max-w-full mb-2 rounded-3xl bg-gray-200"
            :class="(j + i) % 2 == 0 ? 'h-64' : 'h-32'"
          ></div>
          <div class="h-5 max-w-full rounded-3xl bg-gray-200"></div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="grid gap-8" v-for="(chunk, index) in items" :key="index">
        <div v-for="(item, index) in chunk" :key="index">
          <img
            class="h-auto max-w-full rounded-3xl"
            :src="item.imageUrl"
            :alt="item.title"
          />
          <div class="pl-2 text-xl text-zinc-700">
            {{ item.title }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

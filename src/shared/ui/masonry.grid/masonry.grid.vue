<script setup lang="ts">
import { computed } from 'vue';
import { Props, MasonryGridItem } from './model';

const props = defineProps<Props>();

const itemsComputed = computed(() => {
  if (!props.items) return [];
  let chunks: MasonryGridItem[][] = [[], [], [], []];

  let chunkIndex = 0;
  for (let item of props.items) {
    if (chunkIndex > 3) chunkIndex = 0;
    chunks[chunkIndex].push(item);
    chunkIndex++;
  }

  return chunks;
});
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-8"
    @click="() => console.log(itemsComputed)"
  >
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
      <div class="grid gap-8" v-for="(chunk, i) in itemsComputed" :key="i">
        <div v-for="(item, j) in chunk" :key="j">
          <a :href="item.path">
            <img
              class="h-auto max-w-full rounded-3xl mb-3"
              :src="item.imageUrl"
              :alt="item.title"
            />
            <div class="pl-2 text-sm text-zinc-700">
              {{ item.title }}
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

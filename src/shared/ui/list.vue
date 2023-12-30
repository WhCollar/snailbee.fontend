<script setup lang="ts" generic="T extends any">
withDefaults(
  defineProps<{
    items: T[];
    loading?: boolean;
    itemsCountWhenLoading?: number;
  }>(),
  {
    itemsCountWhenLoading: 3,
  },
);
</script>

<template>
  <div class="flex-col">
    <template v-if="loading">
      <template v-for="i in itemsCountWhenLoading" :key="i">
        <div
          class="flex my-6 animate-pulse bg-gray-300 rounded-3xl h-4 w-96"
        ></div>
      </template>
    </template>
    <template v-else>
      <template v-for="(el, index) in items" :key="index">
        <slot name="item" :index="index" :item="el" />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backgroundImage?: string;
}>();
</script>

<template>
  <div
    class="flex-col w-fit p-8 bg-white rounded-3xl"
    :style="
      !!backgroundImage
        ? { 'background-image': `url('${backgroundImage}')` }
        : {}
    "
  >
    <div>
      <slot name="content" />
    </div>
    <div>
      <slot name="actions" />
    </div>
  </div>
</template>

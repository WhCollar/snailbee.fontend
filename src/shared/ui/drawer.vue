<script setup lang="ts">
defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:show', show: boolean): void;
}>();
</script>

<template>
  <div
    v-show="show"
    class="fixed top-0 left-0 z-30 h-screen w-screen"
    style="background: rgba(0, 0, 0, 0.5)"
    @click="emit('update:show', !show)"
  ></div>
  <div
    class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-60"
    tabindex="-1"
    :class="{ 'translate-x-full': !show }"
  >
    <slot name="content" />
  </div>
</template>

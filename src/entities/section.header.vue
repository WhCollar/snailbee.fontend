<script setup lang="ts">

interface Props {
  title: string
  revert?: boolean
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-full my-5" :class="{'flex justify-end': revert}">
    <div class="text-2xl text-zinc-700">
      {{title}}
    </div>
  </div>
</template>
<script setup lang="ts">

interface Props {
  title: string
  revert?: boolean
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-full py-10 px-2" :class="{'flex justify-end': revert}">
    <div class="text-3xl text-zinc-700">
      {{title}}
    </div>
  </div>
</template>
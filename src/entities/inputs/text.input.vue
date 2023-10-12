<script setup lang="ts">
interface Props {
  value: string
  placeholder: string
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>();
</script>

<template>
  <div class="border-b border-zinc-400">
    <input type="text" class="w-full focus:outline-none placeholder:text-zinc-400" :placeholder="placeholder"
           :value="value" @input="newValue => emit('update:value', newValue)"/>
  </div>
</template>
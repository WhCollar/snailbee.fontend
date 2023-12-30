<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  value: string;
  label?: string;
  labelClass?: string;
  inputWrapperClass?: string;
  placeholder?: string;
}

defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();
const input = ref<HTMLElement>();
</script>

<template>
  <label v-if="label" :for="input?.id" :class="labelClass">{{ label }}</label>
  <div :class="inputWrapperClass || 'border-b border-zinc-400'">
    <input
      v-uid
      type="email"
      class="w-full focus:outline-none placeholder:text-zinc-400"
      :placeholder="placeholder"
      :value="value"
      @input="(newValue) => emit('update:value', newValue.text)"
    />
  </div>
</template>

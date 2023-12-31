<script setup lang="ts">
import { Field } from 'vee-validate';
import ErrorMessage from './error.message.vue';

interface Props {
  name: string;
  label?: string;
  labelClass?: string;
  inputWrapperClass?: string;
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <label v-if="label" :for="name" :class="labelClass">{{ label }}</label>
  <div :class="inputWrapperClass || 'border-b border-zinc-400'">
    <Field
      type="email"
      class="w-full focus:outline-none placeholder:text-zinc-400 bg-transparent"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
  <ErrorMessage :name="name" />
</template>

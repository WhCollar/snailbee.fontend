<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

defineProps<{
  name: string;
}>();
</script>

<template>
  <ErrorMessage class="text-xs text-rose-600" :name="name" />
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>();
</script>

<template>
    <div class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80" tabindex="-1"
         :class="{'-translate-x-full': !show}">

      <slot name="content"/>
    </div>
</template>
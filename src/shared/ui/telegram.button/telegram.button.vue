<script setup lang="ts">
defineProps<{
  shareUrl?: string;
  comment?: string;
  size?: 'medium' | 'large';
  text?: 'notext';
}>();
</script>

<template>
  <component
    :is="'script'"
    async
    src="https://telegram.org/js/telegram-widget.js?22"
    :data-telegram-share-url="shareUrl"
    :data-comment="comment"
    :data-size="size"
    :data-text="text"
  />
</template>

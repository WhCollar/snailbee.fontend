<script setup lang="ts">
import PageBookmark from 'widgets/page.bookmark.vue';
import { useWorksQuery } from 'entities/static';
import { MasonryGrid, Container } from 'shared/ui';

const { data, isLoading } = useWorksQuery();
</script>

<template>
  <main>
    <PageBookmark>
      <div class="text-white font-semibold text-2xl">Реализованные проекты</div>
    </PageBookmark>
    <section>
      <Container>
        <MasonryGrid :items="data" :loading="isLoading" />
      </Container>
    </section>
  </main>
</template>

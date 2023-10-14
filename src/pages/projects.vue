<script setup lang="ts">
import PageBookmark from "widgets/page.bookmark.vue";
import {config} from "entities/static";
import {MasonryGrid} from "entities/masonry.grid";
import Container from "entities/utils/container.vue";
</script>

<template>
  <main>
    <PageBookmark>
      <div class="text-white font-semibold text-2xl">
        Реализованные проекты
      </div>
    </PageBookmark>
    <section>
      <Container>
        <MasonryGrid :items="config.ourWorks"/>
      </Container>
    </section>
  </main>
</template>
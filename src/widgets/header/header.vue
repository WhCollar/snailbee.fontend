<script setup lang="ts">
import Container from "entities/utils/container.vue";
import {Menu} from "entities/menu";
import {menuItems, title, headerHeight} from "./config";
</script>

<template>
  <header :class="`h-[${headerHeight}px] text-zinc-700`">
    <Container class="h-full flex justify-between items-center">
      <div class="font-semibold text-2xl">
        {{title}}
      </div>
      <Menu :items="menuItems"/>
    </Container>
  </header>
</template>
<script setup lang="ts">
import Container from "entities/utils/container.vue";
import {Menu} from "entities/menu";
import {config} from "entities/static";
import {menuItems} from "./config";
</script>

<template>
  <header :class="`h-[64px] text-zinc-700`">
    <Container class="h-full flex justify-between items-center">
      <div class="font-semibold text-2xl">
        {{ config.companyName }}
      </div>
      <Menu :items="menuItems"/>
    </Container>
  </header>
</template>
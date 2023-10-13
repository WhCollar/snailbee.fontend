<script setup lang="ts">
import Container from "entities/utils/container.vue";
import Drawer from "entities/drawer.vue";
import {Menu} from "entities/menu";
import {config} from "entities/static";
import {menuItems} from "./config";
import {ref} from "vue";

const isMobileMenuShow = ref(false);
</script>

<template>
  <header :class="`h-[64px] text-zinc-700`">
    <Container class="h-full flex justify-between items-center">
      <div class="font-semibold text-2xl">
        {{ config.companyName }}
      </div>
      <Menu class="max-sm:hidden" :items="menuItems"/>
      <div class="sm:hidden">
        <div @click="isMobileMenuShow = !isMobileMenuShow">
          Menu
        </div>
        <Drawer :show="isMobileMenuShow"/>
      </div>
    </Container>
  </header>
</template>
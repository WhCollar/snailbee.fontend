<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { config } from 'entities/static';
import { RouterEnum } from 'shared/model/router';
import { Drawer, Container, Bars3 } from 'shared/ui';
import { Menu } from 'shared/ui/menu';
import { menuItems } from './config';

const router = useRouter();
const isMobileMenuShow = ref(false);

watch(
  () => router.currentRoute.value,
  () => (isMobileMenuShow.value = false),
);
</script>

<template>
  <header :class="`h-[64px] text-zinc-700`">
    <Container class="h-full flex justify-between items-center">
      <div
        class="font-semibold text-2xl cursor-pointer"
        @click="router.push({ name: RouterEnum.Main })"
      >
        {{ config.companyName }}
      </div>
      <Menu class="max-sm:hidden" :items="menuItems" />
      <div class="sm:hidden">
        <div @click="isMobileMenuShow = !isMobileMenuShow">
          <Bars3 />
        </div>
        <Drawer v-model:show="isMobileMenuShow">
          <template #content>
            <Menu vertical :items="menuItems" />
          </template>
        </Drawer>
      </div>
    </Container>
  </header>
</template>

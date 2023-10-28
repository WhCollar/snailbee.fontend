<script setup lang="ts">
import {ref} from "vue";
import Bars3 from "shared/ui/icons/bars3.vue";
import Container from "entities/utils/container.vue";
import Drawer from "entities/drawer.vue";
import {Menu} from "entities/menu";
import {useStaticDataQuery} from "entities/static";
import {menuItems} from "./config";

const isMobileMenuShow = ref(false);

const {data} = useStaticDataQuery();
</script>

<template>
  <header :class="`h-[64px] text-zinc-700`">
    <Container class="h-full flex justify-between items-center">
      <div class="font-semibold text-2xl">
        {{ data?.info?.title }}
      </div>
      <Menu class="max-sm:hidden" :items="menuItems"/>
      <div class="sm:hidden">
        <div @click="isMobileMenuShow = !isMobileMenuShow">
          <Bars3/>
        </div>
        <Drawer v-model:show="isMobileMenuShow">
          <template #content>
            <Menu vertical :items="menuItems"/>
          </template>
        </Drawer>
      </div>
    </Container>
  </header>
</template>
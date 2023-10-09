<script setup lang="ts">
import Container from "entities/utils/container.vue";
import {Menu} from "entities/menu";
import {menuItems} from "./config";
</script>

<template>
  <header>
    <Container class="flex justify-between">
      <div>
        Лого
      </div>
      <Menu :items="menuItems"/>
    </Container>
  </header>
</template>
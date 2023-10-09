<script setup lang="ts">
import {useRouter} from "vue-router";
import {Props} from "./model";

const props = defineProps<Props>();
const router = useRouter();
</script>

<template>
  <div class="flex">
    <template v-for="item in items">
      <a @click="router.push({name: item.routeName})">
        {{ item.label }}
      </a>
    </template>
  </div>
</template>
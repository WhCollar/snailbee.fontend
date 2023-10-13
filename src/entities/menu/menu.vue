<script setup lang="ts">
import {useRouter} from "vue-router";
import {Props} from "./model";

const props = defineProps<Props>();
const router = useRouter();
</script>

<template>
  <div class="flex items-center">
    <template v-for="item in items">
      <div class="font-medium text-lg mr-10 cursor-pointer"
           :class="{'px-3 py-0.5 rounded-lg border border-zinc-400': item.asButton}">
        <a @click="router.push({name: item.routeName, hash: item.hash})">
          {{ item.label }}
        </a>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {Props} from "./model";

const props = defineProps<Props>();
const router = useRouter();
</script>

<template>
  <div :class="vertical ? 'flex-col items-start' : 'flex items-center'">
    <template v-for="item in items">
      <div class="font-medium text-lg cursor-pointer"
           :class="{'px-3 py-0.5 rounded-lg border border-zinc-400 text-center': item.asButton, 'mr-10': !vertical, 'mb-5': vertical}"
           @click="router.push({name: item.routeName, hash: item.hash})">
        <a>
          {{ item.label }}
        </a>
      </div>
    </template>
  </div>
</template>
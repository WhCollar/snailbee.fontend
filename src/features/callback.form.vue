<script setup lang="ts">
import {ref} from "vue";
import Button from "entities/button.vue";

const name = ref("");
const phone = ref("");
</script>

<template>
  <div class="grid grid-rows-4 auto-rows-auto gap-10 p-5 w-fit bg-white rounded-2xl">
    <div class="font-medium text-2xl">
      Получите больше инфомрации
    </div>
    <div>
      <div class="border-b border-zinc-400">
        <input type="text" class="w-full focus:outline-none placeholder:text-zinc-400" placeholder="Ваше имя" :value="name"/>
      </div>
    </div>
    <div>
      <div class="border-b border-zinc-400">
        <input type="text" class="w-full focus:outline-none placeholder:text-zinc-400" placeholder="Телефон" :value="phone"/>
      </div>
    </div>
    <div>
      <Button>
        Оставить заявку
      </Button>
    </div>
  </div>
</template>
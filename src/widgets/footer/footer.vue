<script setup lang="ts">
import Container from "entities/utils/container.vue";
import Divider from "entities/divider.vue";
import CallbackForm from "features/callback.form.vue";
</script>

<template>
  <footer>
    <Container class="py-10">
      <Divider/>
      <div class="flex justify-between">
        <div>
          <CallbackForm/>
        </div>
        <div class="flex justify-end">
          <div class="grid grid-rows-4 text-right text-zinc-700">
            <div class="font-medium text-2xl">
              Связаться с нами
            </div>
            <div class="text-xl">
              +7 922 402 39 28
            </div>
            <div class="text-xl">
              mail@snailbee.ru
            </div>
            <div class="grid grid-cols-2 gap-1">
              <div>tg</div>
              <div>another</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>
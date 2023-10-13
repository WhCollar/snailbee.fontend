<script setup lang="ts">
import Container from "entities/utils/container.vue";
import Divider from "entities/divider.vue";
import CallbackForm from "features/callback.form.vue";
</script>

<template>
  <footer id="contacts">
    <Container class="py-10">
      <Divider/>
      <div class="flex justify-between">
        <div>
          <CallbackForm/>
        </div>
        <div class="flex justify-end">
          <div class="flex-col justify-end text-right text-zinc-700">
            <div class="font-medium text-2xl my-5">
              Связаться с нами
            </div>
            <div class="text-xl my-1">
              +7 922 402 39 28
            </div>
            <div class="text-xl my-1">
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
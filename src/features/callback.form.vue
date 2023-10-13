<script setup lang="ts">
import {ref} from "vue";
import Button from "entities/button.vue";
import TextInput from "entities/inputs/text.input.vue";
import PhoneInput from "entities/inputs/phone.input.vue";
import Card from "entities/card.vue";

const name = ref("");
const phone = ref("");

const submit = () => {

}
</script>

<template>
  <Card>
    <template #content>
      <div class="font-medium text-2xl mb-8">
        Оставьте быструю заявку
      </div>
      <div class="my-8">
        <TextInput placeholder="Ваше имя" v-model:value="name"/>
      </div>
      <div class="my-8">
        <PhoneInput placeholder="Телефон" v-model:value="phone"/>
      </div>
    </template>
    <template #actions>
      <div class="max-md:flex max-md:justify-center">
        <Button @click="submit">
          Оставить заявку
        </Button>
      </div>
    </template>
  </Card>
</template>
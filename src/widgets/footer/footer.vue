<script setup lang="ts">
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import Container from "entities/utils/container.vue";
import Divider from "entities/divider.vue";
import CallbackForm from "features/callback.form.vue";
import {config} from "entities/static";

const isFooterShow = ref(true);

const router = useRouter();

watch(() => router.currentRoute.value, () => {
  isFooterShow.value = router.currentRoute.value.name != 'briefing';
});
</script>

<template>
  <footer id="contacts">
    <Container v-if="isFooterShow" class="py-10">
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
              {{ config.phone }}
            </div>
            <div class="text-xl my-1">
              {{ config.email }}
            </div>
            <div>
              {{ config.telegram }}
            </div>
          </div>
        </div>
      </div>
    </Container>
    <section>
      <div class="bg-gray-100 py-1.5">
        <div class="w-fit mx-auto">
          {{ config.companyName }}
        </div>
      </div>
    </section>
  </footer>
</template>
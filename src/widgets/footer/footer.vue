<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { CallbackForm } from 'features/callback.form';
import { config } from 'entities/static';
import { Divider, Container, TelegramButton } from 'shared/ui';

const isFooterShow = ref(true);

const router = useRouter();

watch(
  () => router.currentRoute.value,
  () => {
    isFooterShow.value = router.currentRoute.value.name != 'briefing';
  },
);
</script>

<template>
  <footer id="contacts">
    <Container v-if="isFooterShow" class="py-10">
      <Divider />
      <div class="max-sm:flex-col md:flex md:justify-between">
        <div class="max-md:flex max-md:justify-center">
          <CallbackForm />
        </div>
        <div class="flex justify-center md:justify-end">
          <div class="flex-col text-center md:text-right text-zinc-700">
            <div class="font-medium text-2xl mt-8 mb-5">Связаться с нами</div>
            <div class="text-xl my-1">
              {{ config.phone }}
            </div>
            <div class="text-xl my-2">
              {{ config.email }}
            </div>
            <div class="my-1 flex justify-center md:justify-end">
              <TelegramButton
                :share-url="config.telegramButton.shareUrl"
                :size="config.telegramButton.size"
                :comment="config.telegramButton.comment"
                :text="config.telegramButton.text"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
    <section>
      <div class="bg-rose-400 py-0.5">
        <div class="w-fit mx-auto">
          {{ config.companyName }}
        </div>
      </div>
    </section>
  </footer>
</template>

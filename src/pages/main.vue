<script setup lang="ts">
import Container from "entities/utils/container.vue";
import BotImg from "shared/assets/bot.png";
import SectionHeader from "entities/section.header.vue";
import Card from "entities/card.vue";
import Button from "entities/button.vue";

const specializations = [
  {
    label: 'Разработка сайтов и веб-сервисов'
  },
  {
    label: 'Разработка и кастомизация внутренних цифровых сервисов'
  },
  {
    label: 'Разработка сайтов и веб-сервисов'
  },
  {
    label: 'Разработка и кастомизация внутренних цифровых сервисов'
  },
  {
    label: 'Разработка сайтов и веб-сервисов'
  }
];
</script>

<template>
  <main>
    <section :style="{height: `75vh`}">
      <Container class="h-full">
        <div class="h-full bg-contain bg-no-repeat bg-right grid content-center"
             :style="{'background-image': `url('${BotImg}')`}">
          <div class="text-zinc-700">
            <div class="text-5xl font-semibold">
              Диджитал дизайн новым взглядом
            </div>
            <div class="text-2xl font-medium">
              Адаптация компаний в цифровой мир
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Специализации"/>
        <Card class="w-full">
          <template #content>
            <div class="flex-col">
              <div v-for="(el, index) in specializations" :key="index"
                   class="flex my-3 text-xl font-normal text-zinc-500">
                <div class="w-12">
                  {{ `0${index + 1}` }}
                </div>
                <div class="">
                  {{ el.label }}
                </div>
              </div>
            </div>
          </template>
          <template #actions>
            <div class="flex justify-end">
              <Button>
                Оставить заявку
              </Button>
            </div>
          </template>
        </Card>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши работы" :revert="true"/>
        <div class="columns-3 gap-3">
          <Card class="w-full h-fit"><template #content>1</template></Card>
          <Card class="w-full h-fit"><template #content>2</template></Card>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши клиенты"/>
      </Container>
    </section>
  </main>
</template>
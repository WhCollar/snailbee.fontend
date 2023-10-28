<script setup lang="ts">
import {useRouter} from "vue-router";
import {Carousel, Slide} from "vue3-carousel";
import Container from "entities/utils/container.vue";
import BotImg from "shared/assets/bot.png";
import SectionHeader from "entities/section.header.vue";
import Card from "entities/card.vue";
import Button from "entities/button.vue";
import {MasonryGrid} from "entities/masonry.grid";
import {config} from "entities/static";
import {RouterEnum} from "shared/lib/router";

const router = useRouter();

const breakpoints = {
  640: {
    itemsToShow: 1,
    snapAlign: 'left'
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'left'
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'left'
  },
  1280: {
    itemsToShow: 3,
    snapAlign: 'left'
  },
  1536: {
    itemsToShow: 3,
    snapAlign: 'left'
  }
}
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
              <div v-for="(el, index) in config.specializations" :key="index"
                   class="flex my-3 max-md:text-center text-xl font-normal text-zinc-500">
                <div class="w-12 max-md:hidden">
                  {{ `0${index + 1}` }}
                </div>
                <div class="w-full">
                  {{ el.label }}
                </div>
              </div>
            </div>
          </template>
          <template #actions>
            <div class="flex justify-end max-md:hidden">
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
        <MasonryGrid :items="config.ourWorks"/>
        <div class="flex justify-end">
          <Button @click="router.push({name: RouterEnum.Projects})">
            Все работы
          </Button>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши клиенты"/>
        <Carousel :wrap-around="true" :breakpoints="breakpoints">
          <Slide v-for="(client, index) in config.clients" :key="index">
            <div class="carousel__item">
              <img class="max-h-[54px]" :src="client.logoUrl" :alt="client.name">
            </div>
          </Slide>
        </Carousel>
      </Container>
    </section>
  </main>
</template>
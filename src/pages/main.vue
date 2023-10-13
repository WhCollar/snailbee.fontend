<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";
import Container from "entities/utils/container.vue";
import BotImg from "shared/assets/bot.png";
import SectionHeader from "entities/section.header.vue";
import Card from "entities/card.vue";
import Button from "entities/button.vue";
import {MasonryGrid, MasonryGridItem} from "entities/masonry.grid";

interface Client {
  name: string
  logoUrl: string
}

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

const ourWorks: MasonryGridItem[] = [
  {
    title: '0',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    path: ''
  },
  {
    title: '1',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    path: ''
  },
  {
    title: '2',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    path: ''
  },
  {
    title: '3',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    path: ''
  },
  {
    title: '4',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    path: ''
  },
  {
    title: '5',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    path: ''
  },
  {
    title: '6',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    path: ''
  },
  {
    title: '7',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    path: ''
  },
  {
    title: '8',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    path: ''
  },
  {
    title: '9',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    path: ''
  },
  {
    title: '10',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    path: ''
  },
  {
    title: '11',
    imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
    path: ''
  }
];

const clients: Client[] = [
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/google-bard.svg'
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/google-bard-icon.svg'
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/google-play-console-icon.svg'
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/google-play-console.svg'
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/obsidian-icon.svg'
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.svgporn.com/logos/obsidian.svg'
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
        <MasonryGrid :items="ourWorks"/>
        <div class="flex justify-end">
          <Button>
            Все работы
          </Button>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши клиенты"/>
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="(client, index) in clients" :key="index">
            <div class="carousel__item">
              <img class="max-h-[54px]" :src="client.logoUrl" :alt="client.name">
            </div>
          </Slide>
        </Carousel>
      </Container>
    </section>
  </main>
</template>
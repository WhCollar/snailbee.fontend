<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';
import {
  useWorksQuery,
  useSpecializationQuery,
  useClientsQuery,
} from 'entities/static';
import { RouterEnum } from 'shared/model/router';
import {
  SectionHeader,
  Card,
  Button,
  Specialization,
  List,
  Container,
  MasonryGrid,
} from 'shared/ui';
import { BotImg } from 'shared/ui';

const router = useRouter();

const worksQuery = useWorksQuery();
const specializationQuery = useSpecializationQuery();
const clientQuery = useClientsQuery();

const breakpoints = {
  640: {
    itemsToShow: 1,
    snapAlign: 'left',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'left',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'left',
  },
  1280: {
    itemsToShow: 3,
    snapAlign: 'left',
  },
  1536: {
    itemsToShow: 3,
    snapAlign: 'left',
  },
};
</script>

<template>
  <main>
    <section :style="{ height: `75vh` }">
      <Container class="h-full">
        <div
          class="h-full bg-contain bg-no-repeat bg-right grid content-center"
          :style="{ 'background-image': `url('${BotImg}')` }"
        >
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
        <SectionHeader title="Специализации" />
        <Card class="w-full">
          <template #content>
            <div class="flex-col">
              <List
                :items="specializationQuery.data.value"
                :loading="specializationQuery.isLoading.value"
              >
                <template #item="{ index, item }">
                  <Specialization
                    :index="index"
                    :text="(item as any).displayText"
                  />
                </template>
              </List>
            </div>
          </template>
          <template #actions>
            <div class="flex justify-end max-md:hidden">
              <Button> Оставить заявку </Button>
            </div>
          </template>
        </Card>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши работы" :revert="true" />
        <MasonryGrid
          class="mb-4"
          :items="worksQuery.data.value"
          :loading="worksQuery.isLoading.value"
        />
        <div class="flex justify-end">
          <Button @click="router.push({ name: RouterEnum.Projects })">
            Все работы
          </Button>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши клиенты" />
        <template v-if="clientQuery.isLoading.value">
          <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="i in 3" :key="i">
              <div class="carousel__item">
                <div
                  class="h-[54px] w-48 animate-pulse bg-gray-300 rounded-3xl"
                ></div>
              </div>
            </Slide>
          </Carousel>
        </template>
        <template v-else>
          <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide
              v-for="(client, index) in clientQuery.data.value"
              :key="index"
            >
              <div class="carousel__item">
                <img
                  class="max-h-[54px]"
                  :src="client.logoUrl"
                  :alt="client.name"
                />
              </div>
            </Slide>
          </Carousel>
        </template>
      </Container>
    </section>
  </main>
</template>

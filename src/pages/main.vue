<script setup lang="ts">
import Container from "entities/utils/container.vue";
import BotImg from "shared/assets/bot.png";
import SectionHeader from "entities/section.header.vue";
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
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши работы" :revert="true"/>
      </Container>
    </section>
    <section>
      <Container>
        <SectionHeader title="Наши клиенты"/>
      </Container>
    </section>
  </main>
</template>
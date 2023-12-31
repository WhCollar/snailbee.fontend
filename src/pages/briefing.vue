<script setup lang="ts">
import PageBookmark from 'widgets/page.bookmark.vue';
import BriefingForm from 'features/briefing.form.vue';
import { Container } from 'shared/ui';
</script>

<template>
  <main>
    <PageBookmark>
      <div class="text-white font-semibold text-2xl">Бриф</div>
    </PageBookmark>
    <section>
      <Container>
        <div class="grid grid-cols-2 font-medium max-sm:hidden">
          <div>
            Бриф — это не слишком подробное описание проекта, без расписывания
            каждой кнопки или требований к каждой странице. В брифе на
            разработку продукта клиент рассказывает о компании, описывает свои
            пожелания в общих чертах, а также обозначает основной функционал и
            ценность будущего продукта для своего бизнеса.
          </div>
          <div class="text-right max-sm:hidden">
            Рассмотрение заявки проводится в течении 2-х рабочих дней. Далее
            клиент информируется о последующих шагах совместное работы по
            телефону и электронной почте.
          </div>
        </div>
      </Container>
    </section>
    <section class="py-10">
      <Container>
        <BriefingForm />
      </Container>
    </section>
  </main>
</template>

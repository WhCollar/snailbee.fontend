<script setup lang="ts">
import {reactive} from "vue";
import Container from "entities/utils/container.vue";
import TextInput from "entities/inputs/text.input.vue";
import PhoneInput from "entities/inputs/phone.input.vue";
import EmailInput from "entities/inputs/email.input.vue";
import Button from "entities/button.vue";
import PageBookmark from "widgets/page.bookmark.vue";
import {config} from "entities/static";

const wrapperClass = "mb-10";
const wrapperClassWithoutLabel = "my-6";
const inputWrapperClass = "py-3 border-b border-zinc-400";
const inputLabelClass = "text-2xl font-semibold text-zinc-800";

const formData = reactive({
  about: '',
  case: '',
  budget: '',
  commentary: '',
  name: '',
  phone: '',
  email: ''
});

const submit = () => {

}
</script>

<template>
  <main>
    <PageBookmark>
      <div class="text-white font-semibold text-2xl">
        Бриф
      </div>
    </PageBookmark>
    <section>
      <Container>
        <div class="grid grid-cols-2 font-medium">
          <div>
            Бриф — это не слишком подробное описание проекта, без расписывания каждой кнопки или требований к каждой
            странице. В брифе на разработку продукта клиент рассказывает о компании, описывает свои пожелания в общих
            чертах, а также обозначает основной функционал и ценность будущего продукта для своего бизнеса.
          </div>
          <div class="text-right">
            Рассмотрение заявки проводится в течении 2-х рабочих дней. Далее клиент информируется о последующих шагах
            совместное работы по телефону и электронной почте.
          </div>
        </div>
      </Container>
    </section>
    <section class="py-10">
      <Container>
        <div :class="wrapperClass">
          <TextInput v-model:value="formData.about" :label-class="inputLabelClass"
                     :input-wrapper-class="inputWrapperClass" label="Информация о вас или вашей компании."
                     placeholder="На чем специализируетесь? Целевая аудитория? Ваши особенности?"/>
        </div>
        <div :class="wrapperClass">
          <TextInput v-model:value="formData.case" :label-class="inputLabelClass"
                     :input-wrapper-class="inputWrapperClass" label="Какую задачу необходимо выполнить?"
                     placeholder="Назовите задачу, выскажите вешы мысли об исполнении, добавьте описание."/>
        </div>
        <div :class="wrapperClass">
          <TextInput v-model:value="formData.budget" :label-class="inputLabelClass"
                     :input-wrapper-class="inputWrapperClass" label="Планируемые сроки, бюджет."
                     placeholder="Ограничены ли вы во времени и бюджете?  Укажите свои требования."/>
        </div>
        <div :class="wrapperClass">
          <TextInput v-model:value="formData.commentary" :label-class="inputLabelClass"
                     :input-wrapper-class="inputWrapperClass" label="Дополнительные комментарии."
                     placeholder="Заполните в случае если хотите добавить больше информации."/>
        </div>
        <div :class="wrapperClass">
          <div class="text-2xl font-semibold text-zinc-700">
            Данные для связи
          </div>
          <div :class="wrapperClassWithoutLabel">
            <TextInput v-model:value="formData.name"
                       placeholder="Ваше имя"/>
          </div>
          <div :class="wrapperClassWithoutLabel">
            <PhoneInput v-model:value="formData.phone" placeholder="Номер телефона"/>
          </div>
          <div :class="wrapperClassWithoutLabel">
            <EmailInput v-model:value="formData.email" placeholder="Email"/>
          </div>
        </div>
        <Button @click="submit">
          Оставить заявку
        </Button>
      </Container>
    </section>
  </main>
</template>
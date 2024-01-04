<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { Button, EmailInput, PhoneInput, TextInput } from 'shared/ui';
import { sendForm } from './api';

const wrapperClass = 'mb-10';
const wrapperClassWithoutLabel = 'my-6';
const inputWrapperClass = 'py-3 border-b border-zinc-400';
const inputLabelClass = 'text-2xl font-semibold text-zinc-800';

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      about: string().required('Будем рады узнать название или сферу работы'),
      case: string().required('Узнав задачу, мы начнём мысленно её решать'),
      budget: string().default(''),
      commentary: string().default(''),
      name: string().required('Нам нужно знать, как к вам обращаться'),
      phone: string()
        .phone('Неверно введён номер телефона')
        .required('Нам нужно знать, как с вами связаться'),
      email: string()
        .email('Неверно введён Email')
        .required('Нам нужно знать, как с вами связаться'),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  sendForm(values).then(() => resetForm());
});
</script>

<template>
  <Form @submit="onSubmit">
    <div :class="wrapperClass">
      <TextInput
        name="about"
        :label-class="inputLabelClass"
        :input-wrapper-class="inputWrapperClass"
        label="Информация о вас или вашей компании."
        placeholder="На чем специализируетесь? Целевая аудитория? Ваши особенности?"
      />
    </div>
    <div :class="wrapperClass">
      <TextInput
        name="case"
        :label-class="inputLabelClass"
        :input-wrapper-class="inputWrapperClass"
        label="Какую задачу необходимо выполнить?"
        placeholder="Назовите задачу, выскажите ваши мысли об исполнении, добавьте описание."
      />
    </div>
    <div :class="wrapperClass">
      <TextInput
        name="budget"
        :label-class="inputLabelClass"
        :input-wrapper-class="inputWrapperClass"
        label="Планируемые сроки, бюджет."
        placeholder="Ограничены ли вы во времени и бюджете?  Укажите свои требования."
      />
    </div>
    <div :class="wrapperClass">
      <TextInput
        name="commentary"
        :label-class="inputLabelClass"
        :input-wrapper-class="inputWrapperClass"
        label="Дополнительные комментарии."
        placeholder="Заполните в случае если хотите добавить больше информации."
      />
    </div>
    <div :class="wrapperClass">
      <div class="text-2xl font-semibold text-zinc-700">Данные для связи</div>
      <div :class="wrapperClassWithoutLabel">
        <TextInput name="name" placeholder="Ваше имя" />
      </div>
      <div :class="wrapperClassWithoutLabel">
        <PhoneInput name="phone" placeholder="Номер телефона" />
      </div>
      <div :class="wrapperClassWithoutLabel">
        <EmailInput name="email" placeholder="Email" />
      </div>
    </div>
    <Button type="submit">Оставить заявку</Button>
  </Form>
</template>

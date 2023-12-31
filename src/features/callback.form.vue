<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { Button, Card, PhoneInput, TextInput } from 'shared/ui';

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().required('Нам нужно знать, как к вам обращаться'),
      phone: string()
        .phone('Неверно введён номер телефона')
        .required('Нам нужно знать, как с вами связаться'),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  resetForm();
});
</script>

<template>
  <Card>
    <template #content>
      <Form @submit="onSubmit">
        <div class="font-medium text-2xl mb-8">Оставьте быструю заявку</div>
        <div class="mb-8">
          <TextInput name="name" placeholder="Ваше имя" />
        </div>
        <div class="mb-8">
          <PhoneInput name="phone" placeholder="Телефон" />
        </div>
        <div class="max-md:flex max-md:justify-center">
          <Button type="submit"> Оставить заявку </Button>
        </div>
      </Form>
    </template>
  </Card>
</template>

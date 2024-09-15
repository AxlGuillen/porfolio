<script setup>
import { useI18n } from "vue-i18n";
import Title from "../components/shared/TitleComponent.vue";
import ContactForm from "../components/contact/contactForm.vue";


const { t } = useI18n();


</script>

<template>
  <div
    class="flex flex-col gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl"
  >
    <Title :title="t('contact.title')" />

    <div class="flex flex-row justify-around">
      <div>
        <h2>{{t( 'contact.subtitle' )}}</h2>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
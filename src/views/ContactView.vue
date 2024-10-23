<script setup>
import { useI18n } from "vue-i18n";
import Title from "../components/shared/TitleComponent.vue";
import ContactForm from "../components/contact/contactForm.vue";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { onMounted } from 'vue';

const { t } = useI18n();

onMounted(() => {
  AOS.init({
    duration: 1000,
  });
});
</script>


<template>
  <div
    class="flex flex-col gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl"
  >
    <Title :title="t('contact.title')" />

    <div class="flex flex-col justify-around md:flex-row gap-5 items-center">
      <div class="md:w-1/2" data-aos="zoom-in-up">
        <h2 class="text-2xl text-center mb-5">{{t( 'contact.subtitle' )}}</h2>  
        <img src="../assets/developer-team.png" alt="Team work">
      </div>
      <div class="w-full md:w-1/2 p-5 md:p-0">
        <ContactForm data-aos="zoom-in-up"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
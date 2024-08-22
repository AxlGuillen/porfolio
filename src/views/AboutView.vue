<script setup>
import Title from "../components/shared/TitleComponent.vue";
import carrousel from "../components/certificates/carrousel.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();


</script>

<template>
  <div class="flex parallax-container gradient-overlay">
    <div class="parallax-background"></div> <!-- Imagen de fondo para el efecto parallax -->
    <div
      class="flex flex-col p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl"
    >
      <Title :title="t('about.title')" />

      <div class="flex flex-col md:flex-row p-3 md:p-5 lg:p-10 gap-5">
        <div class="md:mx-0 mx-auto md:w-2/5 xl:w-1/2">
          <h1 class="text-3xl xl:text-4xl mb-3">{{ t('about.subtitle') }}</h1>
          <p class="text-sm text-balance font-light lg:text-base xl:text-lg">{{ t('about.history') }}</p>
        </div>
        <carrousel />
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallax-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg/parallax.svg');
  background-attachment: fixed;
  z-index: -1;
}

.gradient-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
}
</style>

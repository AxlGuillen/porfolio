<template>
  <div class="w-96 h-96 rounded-xl bg-transparent shadow-sm shadow-blue-600 flex flex-col ">
    <img class="w-full min-h-40 object-fill rounded-xl" :src="getCoverSrc(cover)" alt="Project">
    <div class="flex flex-col h-screen justify-around">
      <div class="flex justify-between items-center px-7">
        <h1 class="text-3xl lg:text-4xl text-nowrap text-center font-extrabold leading-none tracking-tight text-blue-600">{{ title }}</h1>
        <div class="flex justify-center mt-2 gap-x-1 md:mt-0 md:justify-end">
          <img class="w-8 h-8 md:w-10 md:h-10 p-1.5 rounded-xl bg-blue-950" v-for="tecnologie in technologies" :src="getImageSrc(tecnologie)" :alt="tecnologie" :key="tecnologie">
        </div>
      </div>
      <div class="mx-auto flex flex-nowrap">
        <p class="text-xs lg:text-sm text-pretty px-7">{{ shortDescription }}<a href="#" @click.prevent="showProjectModal" class="text-blue-600 underline hover:text-blue-800 ml-1">{{ t('projects.card.info') }}</a></p>
      </div>
      <div class="flex flex-row justify-around">
        <a :href="links.demo" target="_blank" @click.stop>
          <button type="button" class="w-28 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{{ t('projects.card.demo') }}</button>
        </a>
        <!-- Botón del repositorio -->
        <template v-if="isRepositoryAvailable">
          <a :href="links.repository" target="_blank" @click.stop>
            <button type="button" class="w-28 text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              {{ t('projects.card.repository') }}
            </button>
          </a>
        </template>
        <template v-else>
          <button
          type="button"
          class="w-28 text-white border border-blue-600 opacity-50 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          disabled
        >
          {{ t('projects.card.repository') }}
        </button>
        </template>
      </div>
    </div>
    <DetailsModal ref="projectModal" :title="title" :description="description"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from "vue-i18n";
import DetailsModal from './detailsModal.vue';

const { t } = useI18n();

const props = defineProps({
  cover: String,
  title: String,
  technologies: Array,
  description: Array,
  shortDescription: String,
  links: Object
});

const projectModal = ref(null);

const showProjectModal = () => {
  projectModal.value.showModal();
};

const getImageSrc = (tecnologie) => {
  return new URL(`../../assets/iconos/${tecnologie}`, import.meta.url).href;
};

const getCoverSrc = (cover) => {
  return new URL(`../../assets/projects/${cover}`, import.meta.url).href;
};

// Propiedad computada para verificar si el repositorio está disponible
const isRepositoryAvailable = computed(() => props.links.repository && props.links.repository !== '');
</script>
<script setup>
import Card from '../components/projects/card.vue';
import Title from "../components/shared/TitleComponent.vue";
import data from "../data/projects.json";
import { useI18n } from "vue-i18n";
import { computed, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'

// Usa I18n para manejar los textos multilenguaje
const { t, locale } = useI18n();

// Computed para obtener el idioma actual (en o es)
const currentLanguage = computed(() => locale.value);

// Función para obtener la descripción en el idioma seleccionado
const getDescription = (project) => project.description[currentLanguage.value] || project.description['en'];

// Función para obtener la descripción corta en el idioma seleccionado
const getShortDescription = (project) => project.shortDescription[currentLanguage.value] || project.shortDescription['en'];

onMounted(() => {
  AOS.init({
    duration: 2500,
  });
});

</script>

<template>
  <div
    class="flex flex-col gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl"
  >
    <Title :title="t('projects.title')" />

    <div class="flex flex-wrap gap-y-5 justify-between">
      <Card 
        v-for="project in data.projects" 
        :key="project.id" 
        :cover="project.cover" 
        :title="project.title" 
        :technologies="project.technologies" 
        :description="getDescription(project)" 
        :shortDescription="getShortDescription(project)"
        :links="project.links"
        class="w-full md:w-[49%] 2xl:w-[32%] hover:bg-slate-950"
            data-aos="zoom-in-down"
      />
    </div>
  </div>
</template>

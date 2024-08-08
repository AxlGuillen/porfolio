<template>
  <div class="flex flex-col gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl">
    <div>
      <section class="flex items-center gap-2">
        <button
          class="bg-transparent border p-1.5 rounded-md cursor-pointer hover:bg-secondary-600 transition"
          @click="router.back()"
        >
          <ArrowLeftIcon class="size-10 text-white" />
        </button>
        <h1 class="text-5xl font-black text-blue-600">{{ project.title }}</h1>
      </section>
      
      <section>
        <p v-for="(paragraph, index) in project.description" :key="index" class="my-2 text-pretty text-sm md:text-base p-1.5">
          {{ paragraph }}
        </p>
      </section>
    </div>

    <div>
      <img v-if="imageUrl" :src="imageUrl" alt="Project Cover" class="p-1.5 rounded-xl">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ArrowLeftIcon from '../assets/iconos/svg/ArrowLeftIcon.vue';
import data from '../data/projects.json';

const project = ref({});
const imageUrl = ref('');
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const projectId = route.params.id;
  project.value = data.projects.find(p => p.id === parseInt(projectId));
  
  if (project.value && project.value.cover) {
    imageUrl.value = new URL(`../assets/projects/${project.value.cover}`, import.meta.url).href;
  }
});
</script>

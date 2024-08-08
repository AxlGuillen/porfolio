<template>
  <div>
    <div>
      <section class="flex items-center gap-2">
        <button
          class="bg-transparent border p-1.5 rounded-md cursor-pointer hover:bg-secondary-600 transition"
          @click="router.back()"
        >
          <ArrowLeftIcon class="size-6 text-black" />
        </button>
        <h1 class="text-3xl font-black text-blue-600">{{ project.title }}</h1>
      </section>
      <!-- Agrega más contenido del proyecto aquí -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ArrowLeftIcon from '../assets/iconos/svg/ArrowLeftIcon.vue';
import data from '../data/projects.json';

const project = ref({});
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const projectId = route.params.id;
  project.value = data.projects.find(p => p.id === parseInt(projectId));
});
</script>

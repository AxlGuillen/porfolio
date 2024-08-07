<script setup>
import Card from '../components/projects/card.vue';
import Title from "../components/shared/TitleComponent.vue";
import data from "../data/projects.json"

const projects = data.projects

const details = () => {
  console.log('detalles');
}

</script>

<template>
  <div
    class="flex flex-col gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl  2xl:max-w-6xl animate-fade-right animate-ease-linear md:animate-delay-[5000ms]"
  >
    <div class=" bg-black">
      <Title title="Projects"/>

      <div class="flex flex-wrap gap-y-5 justify-between">
        <Card 
          v-for="project in projects" 
          :key="project.id" 
          :cover="project.cover" 
          :title="project.title" 
          :technologies="project.technologies" 
          :shortDescription="project.shortDescription" 
          :links="project.links"
          @click="details()" 
          class="w-full md:w-[49%] 2xl:w-[32%] hover:bg-slate-950 hover:cursor-pointer"
        />
      </div>
    </div>
    
  </div>
</template>

<style scoped>
</style>
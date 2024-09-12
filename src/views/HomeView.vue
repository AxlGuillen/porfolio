<script setup>
import Navbar from '../components/shared/Navbar.vue';
import MainSectionVue from "./MainView.vue";
import ProjectsView from "./ProjectsView.vue";
import AboutView from "./AboutView.vue"
</script>

<template>
  <Navbar />
  
  <!-- Main Section -->
  <div id="main-section" class="pt-10">
    <MainSectionVue/>
  </div>
  
  <!-- Projects Section -->
  <div id="projects-section">
    <ProjectsView />
  </div>
  
  <!-- About Section -->
  <div id="about-section">
    <AboutView />
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>

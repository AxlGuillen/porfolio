<script setup>
import Navbar from '../components/shared/Navbar.vue';
import MainSectionVue from "./MainView.vue";
import ProjectsView from "./ProjectsView.vue";
import AboutView from "./AboutView.vue";
import ContactView from './ContactView.vue';
import Footer from '../components/shared/Footer.vue';
import { ref, onMounted, nextTick } from 'vue';

const navbarRef = ref(null);

onMounted(async () => {
  await nextTick();

  const sections = document.querySelectorAll('#main-section, #projects-section, #about-section, #contact-section');

  const thresholdValue = window.innerWidth < 768 ? 0.4 : 0.7;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbarRef.value.setActiveLink(entry.target.id);
        }
      });
    },
    {
      threshold: thresholdValue,
    }
  );

  sections.forEach(section => observer.observe(section));
});
</script>

<template>
  <!-- Agregamos el ref para el Navbar -->
  <Navbar ref="navbarRef" />
  
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

  <div id="contact-section">
    <ContactView />
  </div>

  <Footer />
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>

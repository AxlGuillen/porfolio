<template>
  <div
    class="flex space-x-4 my-4 animate-flip-up animate-once animate-delay-[3500ms] xl:text-xl"
  >
    <a
      href="/docs/CV-GUILLEN-AXL.pdf"
      download="Axl_Guillen_CV.pdf"
      class="rounded p-1 border-b-4 border-blue-600 hover:bg-blue-600 hover:border-b-0 flex items-center space-x-2"
    >
      <Download class="text-white"/>
      <span class="text-sm">{{ t("presentation.cv") }}</span>
    </a>
    <a
      href="https://github.com/AxlGuillen"
      target="_blank"
      class="border-b-4 rounded p-1 border-blue-600 hover:bg-blue-600 hover:border-b-0 flex items-center justify-center w-10 h-10"
    >
      <github class="text-white" />
    </a>
    <a
      href="https://www.linkedin.com/in/axl-eduardo-guillen-luna-b63541279/"
      target="_blank"
      class="border-b-4 rounded p-1 border-blue-600 hover:bg-blue-700 hover:border-b-0 flex items-center justify-center w-10 h-10"
    >
      <Linkedin class="text-white"/>
    </a>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import github from "../../assets/iconos/svg/github.vue";
import Linkedin from "../../assets/iconos/svg/linkedin.vue";
import Download from "../../assets/iconos/svg/download.vue";


const { t } = useI18n();
</script>

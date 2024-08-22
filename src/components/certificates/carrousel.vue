<template>
  <swiper-container effect="cards" grab-cursor="true" class="w-80 h-fit md:w-96">
    <swiper-slide v-for="(certificate, index) in certificates" :key="index" class="relative group">
      <img :src="getImageSrc(certificate.image)" :alt="certificate.name" class="w-full h-auto rounded-xl"/>
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <p class="text-lg font-semibold">{{ certificate.name }}</p>
        <p class="text-sm">by {{ certificate.author }}</p>
      </div>
    </swiper-slide>
  </swiper-container>
</template>


<script setup>
import {certificates} from "../../data/certificates.json"

const getImageSrc = (imageName) => {
  return new URL(`../../assets/certificates/${imageName}`, import.meta.url).href;
};
</script>

<style scoped>

swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
}
</style>

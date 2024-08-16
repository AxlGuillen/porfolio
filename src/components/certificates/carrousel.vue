<template>
  <swiper-container effect="cards" grab-cursor="true" class="w-80 h-fit md:w-96 ">
    <swiper-slide v-for="(certificate, index) in certificates" :key="index">
      <img :src="`../../assets/certificates/${certificate.image}`" :alt="certificate.name" class="w-full h-auto" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import {certificates} from "../../data/certificates.json"


</script>

<style scoped>

swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
}
</style>

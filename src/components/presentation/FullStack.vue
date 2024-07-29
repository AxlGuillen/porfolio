<template>
  <div>
    <p
      class="text-sm xl:text-xl text-gray-300 animate-jump-in animate-once animate-delay-[2500ms] animate-ease-in animate-alternate"
    >
      {{ t("presentation.position") }}
    </p>
    <h1 class="text-2xl md:text-4xl xl:text-6xl font-bold">
      <span ref="helloElement" class=""></span>
      <span ref="worldElement" class="text-blue-600"></span>
      <span class="cursor">|</span>
    </h1>
    <div class="animate-flip-up animate-once animate-delay-[3000ms] xl:text-2xl">
      <span class="text-blue-600 mr-2 inline-block ">{{
        t("presentation.years")
      }}</span>
      <span class="inline-block"> {{ t("presentation.experience") }}</span>
      <br />
      <span class="text-blue-600 mr-2 inline-block">{{
        t("presentation.projectsNumber")
      }}</span>
      <span class="inline-block"> {{ t("presentation.projects") }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const helloElement = ref(null);
const worldElement = ref(null);

let i = 0,
  j = 0;

onMounted(() => {
  const helloText = t("presentation.im");
  const worldText = t("presentation.name");

  function typeWriterHello() {
    if (i < helloText.length) {
      helloElement.value.innerHTML += helloText.charAt(i);
      i++;
      setTimeout(typeWriterHello, 150);
    } else {
      typeWriterWorld();
    }
  }

  function typeWriterWorld() {
    if (j < worldText.length) {
      worldElement.value.innerHTML += worldText.charAt(j);
      j++;
      setTimeout(typeWriterWorld, 150);
    }
  }

  typeWriterHello();
});
</script>

<style scoped>
.cursor {
  font-weight: bold;
  animation: blink 1s step-end infinite;
}
</style>

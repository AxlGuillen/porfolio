<template>
  <h1 class="text-4xl font-bold">
    <span ref="helloElement" class="text-neutral-800"></span>
    <span ref="worldElement" class="text-blue-600"></span>
    <span class="cursor">|</span>
  </h1>

  <button class="animate-wiggle">¡Mírame moverme!</button>
  <button class="animate-jump-in animate-delay-600 animate-once">
    Espera un poco, luego entra saltando.
  </button>
  <button class="animate-wiggle">¡Mírame moverme!</button>
  <button class="animate-jump-in animate-delay-600 animate-once">
    Espera un poco, luego entra saltando.
  </button>
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
  const helloText = t("message.hello1");
  const worldText = t("message.hello2");

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



<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.cursor {
  font-weight: bold;
  animation: blink 1s step-end infinite;
}
</style>
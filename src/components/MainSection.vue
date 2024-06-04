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

  <div class="wrapper">
    <svg>
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">Experiencia</text>
    </svg>
  </div>

  <DotLottieVue
    style="height: 500px; width: 500px"
    autoplay
    loop
    src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"
  />
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

svg {
  width: 100%;
  height: 100%;
}
svg text {
  animation: stroke 3s infinite alternate;
  stroke-width: 3;
  stroke: #ffffff;
  font-size: 55px;
}
@keyframes stroke {
  0% {
    fill: rgba(204, 204, 204, 0);
    stroke: rgba(255, 255, 255, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }
  70% {
    fill: rgba(204, 204, 204, 0);
    stroke: rgba(255, 255, 255, 1);
  }
  80% {
    fill: rgba(204, 204, 204, 0);
    stroke: rgba(255, 255, 255, 1);
    stroke-width: 3;
  }
  100% {
    fill: rgba(204, 204, 204, 1);
    stroke: rgba(255, 255, 255, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

.wrapper {
  background-color: #000000;
}
</style>
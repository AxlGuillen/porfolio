<template>
  <div
    class="flex flex-row flex-wrap items-center justify-center gap-5 p-3 md:p-5 lg:p-10"
  >
    <div class="md:basis-1/2 lg:basis-1/3">
      <div>
        <h1 class="text-4xl font-bold">
          <span ref="helloElement" class=""></span>
          <span ref="worldElement" class="text-blue-600"></span>
          <span class="cursor">|</span>
        </h1>
      </div>
      <div>
        <p class="text-gray-500">{{ t("message.position") }}</p>
        <span class="text-blue-600">{{ t("message.years") }}</span
        ><span> {{ t("message.experience") }}</span
        ><br />
        <span class="text-blue-600">{{ t("message.projectsNumber") }}</span
        ><span> {{ t("message.projects") }}</span>
      </div>
      <div class="flex space-x-4 mt-4">
        <button
          class="rounded p-1 border-transparent animate-borderRainbow hover:bg-blue-600 hover:border-b-0 flex items-center space-x-2"
        >
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
          <span>Cv</span>
        </button>
        <a
          href="https://github.com/AxlGuillen"
          target="_blank"
          class="border-b-4 rounded p-1 border-blue-600 hover:bg-gray-600 hover:border-b-0 flex items-center justify-center w-10 h-10"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.linkedin.com/in/axl-eduardo-guillen-luna-b63541279/"
          target="_blank"
          class="border-b-4 rounded p-1 border-blue-600 hover:bg-blue-700 hover:border-b-0 flex items-center justify-center w-10 h-10"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
    <div class="relative md:basis-1/2 lg:basis-1/3">
      <div
        class="absolute inset-0 border-4 animate-borderRainbow transform translate-x-5 translate-y-5"
      ></div>
      <img
        class="relative z-10 rounded-3xl border-4"
        src="/src/assets/yo.jpg"
        alt="Yo mero"
      />
    </div>
  </div>

  <!-- Titulos -->
  <!-- <div class="wrapper">
    <svg>
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">Experiencia</text>
    </svg>
  </div> -->

  <!-- Gifs animados -->
  <!-- <DotLottieVue
    style="height: 500px; width: 500px"
    autoplay
    loop
    src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"
  /> -->
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

@keyframes borderRainbow {
  0% {
    border-image-source: linear-gradient(90deg, red, orange, yellow);
  }
  14.29% {
    border-image-source: linear-gradient(90deg, orange, yellow, green);
  }
  28.57% {
    border-image-source: linear-gradient(90deg, yellow, green, blue);
  }
  42.86% {
    border-image-source: linear-gradient(90deg, green, blue, indigo);
  }
  57.14% {
    border-image-source: linear-gradient(90deg, blue, indigo, violet);
  }
  71.43% {
    border-image-source: linear-gradient(90deg, indigo, violet, red);
  }
  85.71% {
    border-image-source: linear-gradient(90deg, violet, red, orange);
  }
  100% {
    border-image-source: linear-gradient(90deg, red, orange, yellow);
  }
}

.animate-borderRainbow {
  border-bottom-width: 4px;
  border-image-slice: 1;
  animation: borderRainbow 5s linear infinite;
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
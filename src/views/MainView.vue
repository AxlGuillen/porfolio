<template>
  <div class="video-background-container">
    <video autoplay loop muted playsinline class="video-background">
      <source src="../assets/bg/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      class="content-container flex flex-row flex-wrap items-center justify-center gap-5 p-3 md:p-5 lg:p-10 bg-transparent"
    >
      <div class="md:basis-1/2 lg:basis-1/3">
        <div>
          <p
            class="text-sm text-gray-300 animate-jump-in animate-once animate-delay-[2500ms] animate-ease-in animate-alternate"
          >
            {{ t("message.position") }}
          </p>
          <h1 class="text-2xl md:text-4xl font-bold">
            <span ref="helloElement" class=""></span>
            <span ref="worldElement" class="text-blue-600"></span>
            <span class="cursor">|</span>
          </h1>
        </div>
        <div class="animate-flip-up animate-once animate-delay-[3000ms]">
          <span class="text-blue-600 mr-2 inline-block">{{
            t("message.years")
          }}</span
          ><span class="inline-block"> {{ t("message.experience") }}</span
          ><br />
          <span class="text-blue-600 mr-2inline-block">{{
            t("message.projectsNumber")
          }}</span
          ><span class="inline-block"> {{ t("message.projects") }}</span>
        </div>
        <div
          class="flex space-x-4 mt-4 animate-flip-up animate-once animate-delay-[3500ms]"
        >
          <a
            href="/docs/CV-GUILLEN-AXL.pdf"
            download="Axl_Guillen_CV.pdf"
            class="rounded p-1 border-b-4 border-blue-600 hover:bg-blue-600 hover:border-b-0 flex items-center space-x-2 animate-bounce animate-infinite animate-delay-[3600ms]"
          >
            <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
            <span class="text-sm">{{ t("message.cv") }}</span>
          </a>
          <a
            href="https://github.com/AxlGuillen"
            target="_blank"
            class="border-b-4 rounded p-1 border-blue-600 hover:bg-blue-600 hover:border-b-0 flex items-center justify-center w-10 h-10"
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
        <div
          class="flex flex-col gap-3 mt-2 animate-flip-up animate-once animate-delay-[4000ms]"
        >
          <div>
            <h1 class="text-sm">Skills</h1>
          </div>
          <div class="flex flex-row gap-3">
            <img
              src="../assets/iconos/python.png"
              alt="Python"
              class="h-6 w-6"
            />
            <img
              src="../assets/iconos/js.png"
              alt="JavaScript"
              class="h-6 w-6"
            />
            <img src="../assets/iconos/vue.png" alt="Vue" class="h-6 w-6" />
            <img
              src="../assets/iconos/laravel.png"
              alt="Laravel"
              class="h-6 w-6"
            />
            <img
              src="../assets/iconos/tailwind2.png"
              alt="Tailwind"
              class="h-6 w-6"
            />
            <img
              src="../assets/iconos/flutter.png"
              alt="Flutter"
              class="h-6 w-6"
            />
            <img
              src="../assets/iconos/postgres.png"
              alt="Postgres "
              class="h-6 w-6"
            />
            <img
              src="../assets/iconos/firebase.png"
              alt="Firebase"
              class="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div
        class="relative md:basis-1/2 lg:basis-1/3 animate-fade-left animate-once animate-delay-[2500ms] animate-ease-in"
      >
        <div
          class="absolute inset-0 border-4 animate-borderRainbow transform translate-x-2 translate-y-2"
        ></div>
        <img
          class="relative z-10"
          src="/src/assets/yo.jpg"
          alt="Foto de Axl Guillen"
        />
      </div>
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
.video-background-container {
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.video-background-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0) 100%
  );
  z-index: 0;
}

.content-container {
  position: relative;
  z-index: 1;
}

/* Rest of your styles */
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
</style>

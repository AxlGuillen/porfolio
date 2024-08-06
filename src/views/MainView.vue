<template>
  <div class="video-background-container">
    <video autoplay loop muted playsinline class="video-background">
      <source src="../assets/bg/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      class="content-container flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-5 p-3 md:p-5 lg:p-10 bg-transparent"
    >
      <div class="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
        <FullStack />
        <Buttons />
        <Technologies />
      </div>
      <div
        class="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 animate-jump-in animate-once animate-ease-out animate-delay-[4500ms]"
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
import FullStack from "../components/presentation/FullStack.vue";
import Buttons from "../components/presentation/Buttons.vue";
import Technologies from "../components/presentation/Technologies.vue";
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
</style>

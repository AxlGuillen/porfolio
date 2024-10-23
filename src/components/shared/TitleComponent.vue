<template>
  <div class="wrapper" data-aos="zoom-in">
    <svg>
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        {{ title }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { onMounted } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  AOS.init({
    duration: 1000,
  });
});
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}

svg text {
  animation: stroke 2s infinite alternate;
  stroke-width: 2;
  stroke: #1d4ed8;
  font-size: 50px;
}

@keyframes stroke {
  0% {
    fill: rgba(59, 130, 246, 0);
    stroke: rgba(29, 78, 216, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }
  70% {
    fill: rgba(59, 130, 246, 0);
    stroke: rgba(29, 78, 216, 1);
  }
  80% {
    fill: rgba(59, 130, 246, 0);
    stroke: rgba(29, 78, 216, 1);
    stroke-width: 3;
  }
  100% {
    fill: rgba(59, 130, 246, 1);
    stroke: rgba(29, 78, 216, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}
</style>

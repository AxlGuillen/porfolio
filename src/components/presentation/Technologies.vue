<template>
  <div
    class="flex flex-col gap-y-2 animate-flip-up animate-once animate-delay-[4000ms] max-w-md"
  >
    <div>
      <h1 class="text-sm xl:text-2xl">{{ t("presentation.skills") }}</h1>
    </div>

    <Vue3Marquee :pause-on-hover="true">
      <img
        src="../../assets/iconos/python.png"
        alt="Python"
        class="h-6 w-6 mx-1"
      />
      <img
        src="../../assets/iconos/js.png"
        alt="JavaScript"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/ts.png"
        alt="TypeScript"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/html-5.png"
        alt="HTML"
        class="w-6 h-6 mx-1"
      />
      <img src="../../assets/iconos/css.png" alt="CSS" class="w-6 h-6 mx-1" />
      <img src="../../assets/iconos/vue.png" alt="Vue" class="w-6 h-6 mx-1" />
      <img
        src="../../assets/iconos/laravel.png"
        alt="Laravel"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/hono.png"
        alt="Hono"
        class="w-5 mx-1"
      />
      <img src="../../assets/iconos/vite.png" alt="Vite" class="w-6 h-6 mx-1" />
      <img
        src="../../assets/iconos/tailwind.png"
        alt="Tailwind"
        class="w-8 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/flutter.png"
        alt="Flutter"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/cloudFlare.png"
        alt="cloudFlare"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/firebase.png"
        alt="Firebase"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/Mysql.png"
        alt="mysql"
        class="w-6 h-6 mx-1"
      />
      <img
        src="../../assets/iconos/postgreSQL.png"
        alt="postgreSQL"
        class="w-6 h-6 mx-1"
      />
    </Vue3Marquee>
    <!-- Contenedor del Marquee -->
  </div>
</template>



<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
</style>


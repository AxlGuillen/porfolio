<template>
  <div
    class="flex flex-col gap-y-2 animate-flip-up animate-once animate-delay-[4000ms]"
  >
    <div>
      <h1 class="text-sm">{{ t("presentation.skills") }}</h1>
    </div>
    <div class="flex flex-row gap-3">
      <img src="../../assets/iconos/python.png" alt="Python" class="h-6 w-6" />
      <img src="../../assets/iconos/js.png" alt="JavaScript" class="h-6 w-6" />
      <img src="../../assets/iconos/vue.png" alt="Vue" class="h-6 w-6" />
      <img
        src="../../assets/iconos/laravel.png"
        alt="Laravel"
        class="h-6 w-6"
      />
      <img
        src="../../assets/iconos/tailwind2.png"
        alt="Tailwind"
        class="h-6 w-6"
      />
      <img
        src="../../assets/iconos/flutter.png"
        alt="Flutter"
        class="h-6 w-6"
      />
      <img
        src="../../assets/iconos/postgres.png"
        alt="Postgres"
        class="h-6 w-6"
      />
      <img
        src="../../assets/iconos/firebase.png"
        alt="Firebase"
        class="h-6 w-6"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

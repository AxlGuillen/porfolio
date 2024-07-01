<template>
  <div
    class="flex flex-col gap-y-2 animate-flip-up animate-once animate-delay-[4000ms]"
  >
    <div>
      <h1 class="text-sm">{{ t("presentation.skills") }}</h1>
    </div>
    <!-- Contenedor del Marquee -->
    <div class="marquee">
      <div class="logos">
        <!-- Primera copia de logos -->
        <img
          src="../../assets/iconos/python.png"
          alt="Python"
          class="h-6 w-6"
        />
        <img
          src="../../assets/iconos/js.png"
          alt="JavaScript"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/ts.png"
          alt="TypeScript"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/html-5.png" alt="HTML" class="w-6 h-6" />
        <img src="../../assets/iconos/css.png" alt="CSS" class="w-6 h-6" />
        <img src="../../assets/iconos/vue.png" alt="Vue" class="w-6 h-6" />
        <img
          src="../../assets/iconos/laravel.png"
          alt="Laravel"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/vite.png" alt="Vite" class="w-6 h-6" />
        <img
          src="../../assets/iconos/tailwind.png"
          alt="Tailwind"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/flutter.png"
          alt="Flutter"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/Mysql.png" alt="mysql" class="w-6 h-6" />
        <img
          src="../../assets/iconos/postgreSQL.png"
          alt="postgreSQL"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/firebase.png"
          alt="Firebase"
          class="w-6 h-6"
        />
        <!-- Segunda copia de logos -->
        <img
          src="../../assets/iconos/python.png"
          alt="Python"
          class="h-6 w-6"
        />
        <img
          src="../../assets/iconos/js.png"
          alt="JavaScript"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/ts.png"
          alt="TypeScript"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/html-5.png" alt="HTML" class="w-6 h-6" />
        <img src="../../assets/iconos/css.png" alt="CSS" class="w-6 h-6" />
        <img src="../../assets/iconos/vue.png" alt="Vue" class="w-6 h-6" />
        <img
          src="../../assets/iconos/laravel.png"
          alt="Laravel"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/vite.png" alt="Vite" class="w-6 h-6" />
        <img
          src="../../assets/iconos/tailwind.png"
          alt="Tailwind"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/flutter.png"
          alt="Flutter"
          class="w-6 h-6"
        />
        <img src="../../assets/iconos/Mysql.png" alt="mysql" class="w-6 h-6" />
        <img
          src="../../assets/iconos/postgreSQL.png"
          alt="postgreSQL"
          class="w-6 h-6"
        />
        <img
          src="../../assets/iconos/firebase.png"
          alt="Firebase"
          class="w-6 h-6"
        />
      </div>
    </div>
  </div>
</template>



<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.marquee {
  overflow: hidden;
  position: relative;
  width: 100%; /* Ajusta esto según el ancho de tu contenedor */
}

.logos {
  display: flex;
  width: calc(200% - 70px); /* Ajustamos para la duplicación de logos */
  animation: marquee 30s linear infinite;
  gap: 10px;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(
      -50%
    ); /* Movemos la fila de logos hasta la mitad para reiniciar el efecto */
  }
}
</style>


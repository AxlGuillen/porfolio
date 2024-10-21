<script setup>
import { ref, onMounted, computed } from 'vue';
import { Collapse, Dropdown } from 'flowbite';

// Variables reactivas para el estado de visibilidad
const navbarVisible = ref(false);

onMounted(() => {
  // Navbar collapse logic
  const $targetEl = document.getElementById('navbar-language');
  const $triggerEl = document.querySelector('[data-collapse-toggle="navbar-language"]');

  if ($targetEl && $triggerEl) {
    const options = {};
    const navbarCollapse = new Collapse($targetEl, $triggerEl, options);
  }

  // Dropdown logic
  const dropdownTriggerEl = document.querySelector('[data-dropdown-toggle="language-dropdown-menu"]');
  const dropdownMenuEl = document.getElementById('language-dropdown-menu');

  if (dropdownTriggerEl && dropdownMenuEl) {
    const dropdown = new Dropdown(dropdownMenuEl, dropdownTriggerEl);
  }
});

import { useI18n  } from "vue-i18n";

const { locale, t } = useI18n({ useScope: 'global' });

// Computed para mostrar el idioma en el botón
const currentLanguageLabel = computed(() => {
  return locale.value === 'en' ? 'English (US)' : 'Español';
});

const changeLanguage = (lang) => {
  locale.value = lang; // Cambia el idioma
};

const activeLink = ref(null);

const setActiveLink = (link) => {
  console.log(link);
  
  activeLink.value = link;
};

defineExpose({
  setActiveLink, // Exponemos la función para que el componente padre pueda accederla
});
</script>

<template>
    <nav class="bg-neutral-950 fixed w-full z-20 top-0 start-0 animate-flip-down animate-once animate-delay-[5000ms]">
    <div class="2xl:max-w-[1120px] lg:max-w-[860px] h-12 md:h-16 flex flex-wrap items-center justify-end md:justify-between mx-auto py-1 px-1 md:p-4 gap-x-5">
    <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-neutral-700">
            <img v-if="currentLanguageLabel === 'English (US)'" class="w-6 me-2" src="../../assets/iconos/flagsIcons/banderaEUA.png" alt="Bandera de EUA">          
            <img v-if="currentLanguageLabel === 'Español'" class="w-6 me-2" src="../../assets/iconos/flagsIcons/banderaMexico.png" alt="Bandera de Mexicana">          
            {{ currentLanguageLabel }}
        </button>
        <!-- Dropdown -->
        <div class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-neutral-700" id="language-dropdown-menu">
            <ul class="py-2 font-medium" role="none">
                <li @click="changeLanguage('en')">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-400 hover:bg-neutral-600 hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <img class="w-6 me-2" src="../../assets/iconos/flagsIcons/banderaEUA.png" alt="Bandera de EUA">          
                        English (US)
                    </div>
                    </a>
                </li>
                <li @click="changeLanguage('es')">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-400 hover:bg-neutral-600 hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <img class="w-6 me-2" src="../../assets/iconos/flagsIcons/banderaMexico.png" alt="Bandera de Mexicana">          
                        Español
                    </div>
                    </a>
                </li>
            </ul>
        </div>
        <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-neutral-700 focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border- bg-neutral-800 md:bg-neutral-950">
        <li>
            <a href="#main-section" :class="{ active: activeLink === 'main-section' }" class="block py-2 px-3 md:p-0 rounded text-white md:hover:text-blue-600 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent border-gray-700">{{ t('navbar.mainSection') }}</a>
        </li>
        <li>
            <a href="#projects-section" :class="{ active: activeLink === 'projects-section' }"  class="block py-2 px-3 md:p-0 rounded text-white md:hover:text-blue-500 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent border-gray-700">{{ t('navbar.projectsSection') }}</a>
        </li>
        <li>
            <a href="#about-section" :class="{ active: activeLink === 'about-section' }" class="block py-2 px-3 md:p-0 rounded text-white md:hover:text-blue-500 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent border-gray-700">{{ t('navbar.certificatesSection') }}</a>
        </li>
        <li>
            <a href="#contact-section" :class="{ active: activeLink === 'contact-section' }"  class="block py-2 px-3 md:p-0 rounded text-white md:hover:text-blue-500 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent border-gray-700">{{ t('navbar.contactSection') }}</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
</template>

<style scoped>
a {
  position: relative;
  color: white;
  text-decoration: none;
}

a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: currentColor; /* La línea será del mismo color que el texto */
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

a:hover::after,
a:focus::after {
  visibility: visible;
  transform: scaleX(1);
}

a[href="#main-section"]:hover::after,
a[href="#projects-section"]:hover::after,
a[href="#about-section"]:hover::after,
a[href="#contact-section"]:hover::after {
  visibility: hidden;
  transform: scaleX(0);
}

.active {
  color: rgb(28 100 242); /* Cambia el color del texto del enlace activo */
  font-weight: bold; /* Opcional: hacer el texto en negrita */
}

.active::after {
  visibility: visible;
  transform: scaleX(1);
}
</style>
<script setup>
import ArrowUp from '../../assets/iconos/svg/arrow-up.vue';
import gitLogo from '../../assets/iconos/svg/github.vue'
import linkedinLogo from '../../assets/iconos/svg/linkedin.vue'

import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<template>
    

<footer class="flex gradiente">
    <div class="w-full gap-5 p-3 md:p-5 lg:p-10 mx-auto justify-center lg:max-w-4xl 2xl:max-w-6xl">
      <div class= "w-fit mx-auto animate-bounce animate-infinite animate-ease-linear hover:text-blue-600">
        <a href="#main-section" class=" ms-5">
            <ArrowUp class=" mx-auto"/>
            <p class="text-center text-xs ">{{ t('footer.back') }}</p>
        </a>
      </div>
        
      <hr class="my-6 sm:mx-auto border-white lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-smsm:text-center">© 2024 All Rights Reserved. <span class="text-xs">Hecho con <3 </span>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://github.com/AxlGuillen" class="hover:text-white" target="_blank">
                  <gitLogo class="hover:text-[#171515]" />
                  <span class="sr-only">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/axl-eduardo-guillen-luna-b63541279/" class="hover:text-white ms-5" target="_blank">
                  <linkedinLogo class="hover:text-[#0077B5]"/>
                  <span class="sr-only">linkedin</span>
              </a>
          </div>
      </div>
    </div>
</footer>

</template>

<style scoped>
.gradiente{
    background: linear-gradient(to bottom, #000000, #1c63f264);
}
</style>
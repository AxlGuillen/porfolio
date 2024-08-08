<template>
  <div v-if="isVisible" @click.self="hideModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative rounded-lg shadow bg-neutral-900  max-w-xs md:max-w-2xl lg:max-w-3xl">
      <div class="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
        <h3 class="text-2xl md:text-3xl font-semibold text-white">{{ title }}</h3>
        <button @click="hideModal" class="text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-neutral-600 hover:text-red-500">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <div class="p-4 space-y-4">
        <section>
          <p v-for="(paragraph, index) in description" :key="index" class="my-2 text-pretty text-xs md:text-base p-1.5">
            {{ paragraph }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  description: String
});

const isVisible = ref(false);

const showModal = () => {
  isVisible.value = true;
};

const hideModal = () => {
  isVisible.value = false;
};

defineExpose({ showModal, hideModal });
</script>

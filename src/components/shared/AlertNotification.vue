<script setup>
import { useNotificationStore } from '../../stores/notificationStore';
import { computed } from 'vue';

import CheckFilledIcon from '../../assets/iconos/svg/CheckFilledIcon.vue';
import CloseFilledIcon from '../../assets/iconos/svg/CloseFilledIcon.vue';

const $notificationStore = useNotificationStore();

const notificationConfigs = {
  success: {
    icon: CheckFilledIcon,
    iconClass: 'text-green-400 bg-green-800',
  },
  error: {
    icon: CloseFilledIcon,
    iconClass: 'text-red-400 bg-red-800',
  },
  warning: {
    icon: CloseFilledIcon,
    iconClass: 'text-yellow-300 bg-yellow-800',
  },
};

const currentNotificationType = computed(() => 
  $notificationStore.currentNotification?.type || null
);

const currentNotificationConfig = computed(() => 
  currentNotificationType.value ? notificationConfigs[currentNotificationType.value] : null
);
</script>

<template>
  <Transition name="fade">
    <div v-if="$notificationStore.isVisible" id="toast-top-right" class="fixed flex justify-between items-center w-full z-[999] max-w-xs p-4 space-x-4 text-gray-300 bg-neutral-900 border border-neutral-700 divide-neutral-700 rounded-lg shadow-sm top-5 right-5" role="alert">
      <component 
        :is="currentNotificationConfig?.icon" 
        v-if="currentNotificationConfig"
        :class="['rounded-lg', currentNotificationConfig.iconClass]"
      />

      <div class="ms-3 flex-grow text-sm font-normal">{{ $notificationStore.currentNotification?.message }}</div>

      <button 
        @click="$notificationStore.hideNotification()"
        type="button" 
        class="ms-auto -mx-1.5 -my-1.5 bg-neutral-900 text-gray-400 hover:text-gray-200 rounded-lg focus:ring-2 focus:ring-gray-600 p-1.5 hover:bg-neutral-800 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

import { ref, computed } from "vue";
import { defineStore } from "pinia";

// No es necesario el tipo en JavaScript
export const useNotificationStore = defineStore("notification", () => {
  const notification = ref(null);
  const isVisible = ref(false);
  let hideTimeoutId = null;
  let removeTimeoutId = null;

  const currentNotification = computed(() => notification.value);

  function clearTimeouts() {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId);
      hideTimeoutId = null;
    }
    if (removeTimeoutId) {
      clearTimeout(removeTimeoutId);
      removeTimeoutId = null;
    }
  }

  function showNotification(message, type) {
    clearTimeouts();
    notification.value = { message, type };
    isVisible.value = true;

    hideTimeoutId = setTimeout(() => {
      hideNotification();
    }, 5000);
  }

  function hideNotification() {
    clearTimeouts();
    isVisible.value = false;
    removeTimeoutId = setTimeout(() => {
      notification.value = null;
    }, 300); // Ajusta este tiempo según la duración de tu animación de fade-out
  }

  return {
    notification,
    isVisible,
    currentNotification,
    showNotification,
    hideNotification,
  };
});

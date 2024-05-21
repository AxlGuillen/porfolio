import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "main",
      component: () => import("../App.vue"),
    },
    /* {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
      meta: { requiresAuth: true },
    }, */
  ],
});

export default router;

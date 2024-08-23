import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/porfolio/"),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/HomeView.vue"),
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

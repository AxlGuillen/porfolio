import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
      props: true,
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

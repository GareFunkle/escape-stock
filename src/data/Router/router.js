import { createRouter, createWebHistory } from "vue-router";
import Home from "../../views/Home.vue";
import Products from "../../views/Products.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:category",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

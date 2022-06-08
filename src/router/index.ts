import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RestaurantView from "../pages/RestaurantPage.vue";
import OrderPage from "../pages/OrderPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "restaurant",
    component: RestaurantView,
  },
  {
    path: "/order/:id",
    name: "order",
    component: OrderPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

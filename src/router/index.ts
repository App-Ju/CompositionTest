import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RestaurantView from "../views/RestaurantView.vue";
import DishesView from "../views/DishesView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "restaurant",
    component: RestaurantView,
  },
  {
    path: "/dishes",
    name: "dishes",
    component: DishesView,
  },
  {
    path: "/shopping-cart",
    name: "shopping-cart",
    component: ShoppingCartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

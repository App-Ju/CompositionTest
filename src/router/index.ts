import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useRestaurantsStore } from "@/store/restaurants";
import RestaurantView from "../pages/RestaurantPage.vue";
import OrderPage from "../pages/OrderPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "restaurant",
    component: RestaurantView,
    beforeEnter: (to, from) => {
      const restaurantsStore = useRestaurantsStore();
      restaurantsStore.currentRestaurantDishes.forEach(
        (el) => (el.quantityInCart = 0)
      );
    },
  },
  {
    path: "/order/:id",
    name: "order",
    component: OrderPage,
    beforeEnter: (to, from) => {
      const restaurantsStore = useRestaurantsStore();
      if (!restaurantsStore.currentRestaurantDishes.length) {
        return { name: "restaurant" };
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
//   // ...
//   // explicitly return false to cancel the navigation
//   return false;
// });
export default router;

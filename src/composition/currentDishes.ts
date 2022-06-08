import { useRouter } from "vue-router";
import { useRestaurantsStore } from "@/store/restaurants";
import { IRestaurant } from "@/typescript/interfaces";

export function useCurrentDishes() {
  const router = useRouter();
  const restaurantsStore = useRestaurantsStore();

  const showDishes = (restaurant: IRestaurant) => {
    restaurantsStore.addCurrentDishes(restaurant.id);
    router.push(`/order/${restaurant.id}`);
  };

  return { showDishes };
}

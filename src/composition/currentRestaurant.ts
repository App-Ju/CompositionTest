import { useRouter } from "vue-router";
import { useRestaurantsStore } from "@/store/restaurants";
import { IRestaurant } from "@/typescript/interfaces";
import { ref } from "vue";

export function useCurrentRestaurant() {
  const router = useRouter();
  const restaurantsStore = useRestaurantsStore();

  const restaurantId = ref();

  const showDishes = (restaurant: IRestaurant) => {
    restaurantId.value = restaurant.id;
    restaurantsStore.addCurrentDishes(restaurant.id);
    router.push(`/order/${restaurant.id}`);
  };

  return { restaurantId, showDishes };
}

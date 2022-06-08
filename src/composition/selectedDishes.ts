import { useRestaurantsStore } from "@/store/restaurants";
// import { IDish } from "@/typescript/interfaces";
import { computed } from "vue";

export function useSelectedDishes() {
  const restaurantsStore = useRestaurantsStore();
  const dishes = computed(() => {
    return restaurantsStore.currentRestaurantDishes;
  });

  return { dishes };
}

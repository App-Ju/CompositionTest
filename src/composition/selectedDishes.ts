import { useRestaurantsStore } from "@/store/restaurants";
import { computed } from "vue";

export function useSelectedDishes() {
  const restaurantsStore = useRestaurantsStore();

  const dishes = computed(() => {
    return restaurantsStore.currentRestaurantDishes.filter(
      (el) => el.quantityInCart !== 0
    );
  });

  const totalCost = computed(() => {
    return dishes.value
      .map((el) => el.price * el.quantityInCart)
      .reduce((a, b) => a + b, 0);
  });

  const totalCount = computed(() => {
    return dishes.value
      .map((el) => el.quantityInCart)
      .reduce((a, b) => a + b, 0);
  });

  return { dishes, totalCost, totalCount };
}

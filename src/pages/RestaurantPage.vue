<template>
  <div class="restaurants">
    <RestaurantCard
      v-for="restaurant in restaurantsStore.restaurants"
      :key="restaurant.id"
      @click="showDishes(restaurant)"
    >
      {{ restaurant.name }}
    </RestaurantCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";
import { useCurrentRestaurant } from "@/composition/currentRestaurant";
import RestaurantCard from "@/components/RestaurantCard.vue";

export default defineComponent({
  name: "RestaurantView",
  components: { RestaurantCard },
  setup() {
    const restaurantsStore = useRestaurantsStore();
    const { showDishes } = useCurrentRestaurant();

    return {
      restaurantsStore,
      showDishes,
    };
  },
});
</script>

<style lang="scss" scoped>
.restaurants {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  height: calc(100vh - 67px);
  margin-top: 10px;
}
</style>

<template>
  <div class="restaurants">
    <RestaurantCard
      v-for="restaurant in restaurantsStore.restaurants"
      :key="restaurant.id"
      @click="showDishes(restaurant)"
      :photo-name="restaurant.photoName"
    >
      <div class="restaurants__name">{{ restaurant.name }}</div>
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

  &__name {
    background: rgba(180, 188, 196, 0.66);
    padding: 3px;
    width: max-content;
  }
}
</style>

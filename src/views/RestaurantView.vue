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
import { useCurrentDishes } from "@/composition/currentDishes";
import RestaurantCard from "@/components/RestaurantCard.vue";
// import { IRestaurant } from "@/typescript/interfaces";

export default defineComponent({
  name: "RestaurantView",
  components: { RestaurantCard },
  setup() {
    const restaurantsStore = useRestaurantsStore();
    const { showDishes } = useCurrentDishes();

    return {
      restaurantsStore,
      showDishes,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.restaurants {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>

<template>
  <div class="restaurants">
    <Suspense>
      <RestaurantCard
        v-for="restaurant in restaurantsStore.restaurants"
        :key="restaurant.id"
        @click="showDishes(restaurant)"
        :photo-name="restaurant.photoName"
      >
        <div class="restaurants__name">{{ restaurant.name }}</div>
      </RestaurantCard>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const RestaurantCard = defineAsyncComponent(() =>
  import("@/components/RestaurantCard.vue")
);

import { useRestaurantsStore } from "@/store/restaurants";
const restaurantsStore = useRestaurantsStore();

import { useCurrentRestaurant } from "@/composition/currentRestaurant";
const { showDishes } = useCurrentRestaurant();
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

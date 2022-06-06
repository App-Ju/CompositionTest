<template>
  <div class="restaurant">
    <CardComponent
      v-for="restaurant in restaurantsStore.restaurants"
      :key="restaurant.id"
      @click="click(restaurant)"
    >
      {{ restaurant.name }}
    </CardComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";
import CardComponent from "@/components/CardComponent.vue";
import { IRestaurant } from "@/typescript/interfaces";

export default defineComponent({
  name: "HomeView",
  components: { CardComponent },
  setup() {
    const restaurantsStore = useRestaurantsStore();

    return {
      restaurantsStore,
    };
  },
  methods: {
    click(restaurant: IRestaurant) {
      this.$router.push(`/dishes/${restaurant.id}`);
      console.log(restaurant.id);
      // this.$router.push({
      //   name: "DishesView",
      //   params: { id: restaurant.id },
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
.restaurant {
  display: flex;
  flex-wrap: wrap;
  //width: 95%;
  margin: 0 auto;
}
</style>

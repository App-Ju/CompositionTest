<template>
  <div class="dishes">
    <DishCard
      class="dish"
      v-for="dish in restaurantsStore.currentRestaurantDishes"
      :key="dish.id"
      :dish="dish"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";
import DishCard from "@/components/DishCard.vue";

export default defineComponent({
  name: "DishesView",
  components: { DishCard },
  setup() {
    const restaurantsStore = useRestaurantsStore();

    return {
      restaurantsStore,
    };
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.dishes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>

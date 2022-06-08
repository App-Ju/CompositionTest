<template>
  <div class="order-wrapper">
    <DishesView class="order-wrapper__dishes" />
    <ShoppingCartView class="order-wrapper__cart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import DishesView from "@/views/DishesView.vue";

export default defineComponent({
  name: "OrderPage",
  components: { DishesView, ShoppingCartView },
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
.order-wrapper {
  display: flex;
  background-color: #b4bcc4;

  &__dishes {
    width: 80%;
  }

  &__cart {
    width: 20%;
  }
}
</style>

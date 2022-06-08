<template>
  <div class="order-wrapper">
    <DishesView />
    <ShoppingCartView class="cart" />
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
}

//.dishes {
//  display: flex;
//  flex-wrap: wrap;
//  width: 80%;
//}

.cart {
  width: 20%;
  height: 100%;
  background-color: #7d6f86;
}
</style>

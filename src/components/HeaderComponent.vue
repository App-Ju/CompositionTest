<template>
  <nav class="nav">
    <router-link to="/">Все Рестораны</router-link>
    <router-link to="/order/restaurantId" class="nav__cart">
      <BootstrapIcon id="nav-cart" icon="cart4" />
      <div v-if="totalCount" class="nav__cart-count">{{ totalCount }}</div>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import { useSelectedDishes } from "@/composition/selectedDishes";
import { useCurrentRestaurant } from "@/composition/currentRestaurant";

export default defineComponent({
  name: "HeaderComponent",
  components: { BootstrapIcon },
  setup() {
    const { totalCount } = useSelectedDishes();
    const { restaurantId } = useCurrentRestaurant();

    return { totalCount, restaurantId };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaebee;

  &__cart {
    position: relative;
  }

  &__cart-count {
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    font-size: 12px;
    background-color: #57b750;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      color: #42b983;
    }
  }
}

#nav-cart {
  width: 25px;
  height: 25px;
}
</style>

<template>
  <nav class="nav">
    <router-link to="/">Все Рестораны</router-link>
    <div class="nav__cart">
      <BootstrapIcon id="nav-cart" icon="cart4" />
      <div v-if="totalCount" class="nav__cart-count">{{ totalCount }}</div>
    </div>
  </nav>
</template>

<script setup>
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import { useSelectedDishes } from "@/composition/selectedDishes";

const { totalCount } = useSelectedDishes();
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
    display: flex;
    justify-content: center;
    align-items: center;
    right: -2px;
    bottom: 0;
    width: 18px;
    height: 18px;
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
  width: 30px;
  height: 30px;
}
</style>

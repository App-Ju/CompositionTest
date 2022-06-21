<template>
  <div class="order-wrapper">
    <DishesView class="order-wrapper__dishes" />
    <ShoppingCartView class="order-wrapper__cart" />
  </div>
</template>

<script setup>
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import DishesView from "@/views/DishesView.vue";
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

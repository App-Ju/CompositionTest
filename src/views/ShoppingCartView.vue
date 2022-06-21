<template>
  <div class="cart-wrapper">
    <Suspense>
      <DishCard
        class="dish"
        v-for="dish in dishes"
        :key="dish.id"
        :styles="styles"
        :photo-name="dish.photoName"
      >
        <template v-slot:name>
          <div class="dish__name">{{ dish.name }}</div>
        </template>
        <template v-slot:price>
          <div class="dish__price">{{ dish.price * dish.quantityInCart }}₽</div>
        </template>
        <template v-slot:buttons>
          <div class="dish__footer-btn">
            <BootstrapIcon icon="plus-square" @click="addQuantity(dish)" />
            <div>{{ dish.quantityInCart }}</div>
            <BootstrapIcon icon="dash-square" @click="reduceQuantity(dish)" />
          </div>
        </template>
      </DishCard>
      <template #fallback> Loading... </template>
    </Suspense>
    <div class="submit-button">
      <EButton
        id="cart-button"
        :data="{
          size: 'xs',
        }"
        ><span>Заказзать</span> <span>{{ totalCost }} ₽</span></EButton
      >
    </div>
  </div>
</template>

<script setup>
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

import { defineAsyncComponent } from "vue";
const DishCard = defineAsyncComponent(() =>
  import("@/components/DishCard.vue")
);

import { useSelectedDishes } from "@/composition/selectedDishes";
const { dishes, totalCost } = useSelectedDishes();

import { useChangeQuantity } from "@/composition/changeQuantity";
const { addQuantity, reduceQuantity } = useChangeQuantity();

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  dish: {
    position: "relative",
    width: "100%",
    height: "70px",
    marginTop: "1px",
    background: "#eaebee",
  },
  img: {
    position: "absolute",
    left: "10px",
    top: "7px",
    width: "30px",
    height: "30px",
    objectFit: "cover",
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

.cart-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 57px);
  height: max-content;
}
.dish {
  width: 100%;

  &__name {
    width: 55%;
    height: 36px;
    padding-top: 8px;
    margin-left: 40px;
    font-size: 12px;
    text-align: start;
  }

  &__price {
    width: 20%;
    text-align: end;
    font-size: 14px;
  }

  &__footer-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    height: 26px;
  }
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-grow: 1;
  margin-top: 1px;
  padding-bottom: 10px;
  background-color: #eaebee;
}

#cart-button {
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: #57b750;

  &:active {
    background-color: #7ada73;
  }
}
</style>

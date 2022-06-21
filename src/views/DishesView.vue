<template>
  <div class="dishes">
    <Suspense>
      <DishCard
        class="dish"
        v-for="dish in restaurantsStore.currentRestaurantDishes"
        :key="dish.id"
        :styles="styles"
        :photo-name="dish.photoName"
      >
        <template v-slot:name>
          <div class="dish__name">{{ dish.name }}</div>
        </template>
        <template v-slot:description>
          <div class="dish__description">
            {{ dish.description }}
          </div>
        </template>
        <template v-slot:price>
          <div class="dish__price">Цена: {{ dish.price }}₽</div>
        </template>
        <template v-slot:buttons>
          <EButton
            v-if="!dish.quantityInCart"
            id="cart-button"
            :data="{
              size: 'xs',
            }"
            @click="addQuantity(dish)"
            >В корзину</EButton
          >
          <div v-else class="dish__footer-btn">
            <BootstrapIcon icon="plus-square" @click="addQuantity(dish)" />
            <div>{{ dish.quantityInCart }}</div>
            <BootstrapIcon icon="dash-square" @click="reduceQuantity(dish)" />
          </div>
        </template>
      </DishCard>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup>
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

import { defineAsyncComponent } from "vue";
const DishCard = defineAsyncComponent(() =>
  import("@/components/DishCard.vue")
);

import { useRestaurantsStore } from "@/store/restaurants";
const restaurantsStore = useRestaurantsStore();

import { useChangeQuantity } from "@/composition/changeQuantity";
const { addQuantity, reduceQuantity } = useChangeQuantity();

const styles = {
  body: {
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "end",
    width: "100%",
    paddingBottom: "5%",
    height: "max-content",
    zIndex: "1000",
  },
  dish: {
    position: "relative",
    minWidth: "176px",
    width: "calc(100% / 4 - (11px + 16px) * 2)",
    height: "236px",
    margin: "11px",
    background: "#eaebee",
    borderRadius: "8px",
  },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "60%",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    zIndex: 0,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.dishes {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 11px;
}

.dish {
  &__name {
    width: 90%;
    padding: 5% 5% 0 5%;
    text-align: start;
    background: $background-color;
    z-index: 1000;
  }

  &__description {
    width: 90%;
    padding: 5%;
    font-size: 12px;
    text-align: start;
    background: $background-color;
    z-index: 1000;
  }

  &__price {
    width: 45%;
    text-align: start;
    font-size: 14px;
    padding-bottom: 4px;
    padding-left: 5%;
    margin-top: 15%;
  }

  &__footer-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    height: 26px;
    margin-right: 10px;
  }
}

#cart-button {
  background-color: #57b750;
  margin-right: 5%;

  &:active {
    background-color: #7ada73;
  }
}
</style>

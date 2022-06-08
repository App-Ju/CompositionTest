<template>
  <div class="dishes">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";
import { useChangeQuantity } from "@/composition/changeQuantity";
import DishCard from "@/components/DishCard.vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

export default defineComponent({
  name: "DishesView",
  components: { DishCard, BootstrapIcon },
  setup() {
    const restaurantsStore = useRestaurantsStore();
    const { addQuantity, reduceQuantity } = useChangeQuantity();

    return {
      restaurantsStore,
      addQuantity,
      reduceQuantity,
    };
  },
  props: {},
  data() {
    return {
      styles: {
        body: {
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "end",
          width: "90%",
          padding: "5%",
          height: "max-content",
          zIndex: "1000",
        },
        dish: {
          position: "relative",
          minWidth: "160px",
          width: "calc(100% / 4 - (11px + 16px) * 2)",
          height: "220px",
          margin: "11px",
          padding: "16px",
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
      },
    };
  },
});
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
    width: 100%;
    padding-top: 8px;
    text-align: start;
    background: $background-color;
    z-index: 1000;
  }

  &__description {
    width: 100%;
    padding-top: 8px;
    font-size: 12px;
    text-align: start;
    background: $background-color;
    z-index: 1000;
  }

  &__price {
    width: 50%;
    text-align: start;
    font-size: 14px;
    padding-bottom: 4px;
    margin-top: 15%;
  }

  &__footer-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    height: 26px;
  }
}

#cart-button {
  background-color: #57b750;

  &:active {
    background-color: #7ada73;
  }
}
</style>

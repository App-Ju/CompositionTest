<template>
  <div class="cart-wrapper">
    <DishCard
      class="dish"
      v-for="dish in dishes"
      :key="dish.id"
      :body-style="bodyStyle"
      :dish-style="dishStyle"
    >
      <template v-slot:img>
        <img src="../assets/logo.png" alt="#" class="dish__img" />
      </template>
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

<script lang="ts">
import { defineComponent } from "vue";
import { useSelectedDishes } from "@/composition/selectedDishes";
import { useChangeQuantity } from "@/composition/changeQuantity";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import DishCard from "@/components/DishCard.vue";

export default defineComponent({
  name: "ShoppingCartView",
  components: { DishCard, BootstrapIcon },
  props: {},
  setup() {
    const { dishes, totalCost, totalCount } = useSelectedDishes();
    const { addQuantity, reduceQuantity } = useChangeQuantity();

    return { dishes, totalCost, totalCount, addQuantity, reduceQuantity };
  },
  data() {
    return {
      bodyStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
      },
      dishStyle: {
        position: "relative",
        width: "100%",
        height: "70px",
        marginTop: "1px",
        background: "#eaebee",
      },
    };
  },
  computed: {},
  methods: {},
});
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
  &__img {
    position: absolute;
    left: 10px;
    top: 7px;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

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

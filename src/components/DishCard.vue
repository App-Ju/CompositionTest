<template>
  <div class="dish" @mouseenter="toggleVisible" @mouseleave="toggleVisible">
    <img src="../assets/logo.png" alt="#" class="dish__img" />
    <div class="dish__body">
      <div class="dish__name">{{ dish.name }}</div>
      <div v-show="isVisible" class="dish__description">
        {{ dish.description }}
      </div>
      <div class="dish__footer">
        <div class="dish__price">Цена: {{ dish.price }}₽</div>
        <EButton
          v-if="!dish.quantityInCart"
          id="cart-button"
          :data="{
            size: 'xs',
          }"
          @click="add(dish)"
          >В корзину</EButton
        >
        <div v-else class="dish__footer-btn">
          <BootstrapIcon icon="plus-square" />
          <div>1</div>
          <BootstrapIcon icon="dash-square" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useShowContent } from "@/composition/showContent";
import { useChangeQuantity } from "@/composition/changeQuantity";
import { IDish } from "@/typescript/interfaces";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

export default defineComponent({
  name: "DishCard",
  components: { BootstrapIcon },
  setup(props) {
    const { isVisible, toggleVisible } = useShowContent();
    const { addQuantity } = useChangeQuantity(props);

    return { isVisible, toggleVisible, addQuantity };
  },
  props: {
    dish: {
      type: Object as PropType<IDish>,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    add(dish: IDish) {
      console.log(dish);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.dish {
  position: relative;
  min-width: 160px;
  width: calc(100% / 4 - (#{$margin} + #{$padding}) * 2);
  height: 220px;
  margin: $margin;
  padding: $padding;
  background: $background-color;
  border-radius: 8px;

  &__img {
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    height: 60%;
    object-fit: cover;
    z-index: 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

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

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15%;
    width: 100%;
  }

  &__price {
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

#cart-button {
  background-color: #57b750;

  &:active {
    background-color: #7ada73;
  }
}
</style>

<template>
  <div class="restaurant">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
});
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.restaurant {
  min-width: 200px;
  width: calc(100% / 3 - (#{$margin} + #{$padding}) * 2);
  height: 100px;
  margin: $margin;
  padding: $padding;
  background: $background-color;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    transform: translateY(-6px);
    box-shadow: 0 5px 7px 0 #b4bcc4;
  }

  &:active {
    transition: 0.3s;
    transform: translateY(-3px);
    box-shadow: 0 3px 4px 0 #b4bcc4;
  }
}
</style>

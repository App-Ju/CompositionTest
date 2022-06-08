<template>
  <div class="restaurant">
    <slot class="restaurant__name" />
    <img :src="requestPhoto" alt="#" class="restaurant__img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetPhoto } from "@/composition/getPhoto";

export default defineComponent({
  name: "CardComponent",
  props: {
    photoName: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const { requestPhoto } = useGetPhoto(props.photoName!);

    return { requestPhoto };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.restaurant {
  position: relative;
  min-width: 200px;
  width: calc(100% / 3 - (#{$margin} + #{$padding}) * 2);
  height: 100px;
  margin: $margin;
  padding: $padding;
  border-radius: $border-radius;
  transition: 0.5s;

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $border-radius;
    z-index: -1;
  }

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

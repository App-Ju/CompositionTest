<template>
  <div class="restaurant">
    <slot class="restaurant__name" />
    <img :src="photo" alt="#" class="restaurant__img" />
  </div>
</template>

<script setup>
const props = defineProps({
  photoName: {
    type: String,
    require: true,
  },
});

import { getPhoto } from "@/api/unsplashAPI";
const requestPhoto = await getPhoto(props.photoName);
const photo = requestPhoto.data.results[0].urls.regular;
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

<template>
  <div :style="styles.dish" @mouseenter="onVisible" @mouseleave="offVisible">
    <img :src="photo" alt="#" :style="styles.img" />
    <div :style="styles.body">
      <slot name="name" />
      <div v-show="isVisible" style="z-index: 1000">
        <slot name="description" />
      </div>
      <slot name="price" />
      <slot name="buttons" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  styles: {
    type: Object,
    require: true,
  },
  photoName: {
    type: String,
    require: true,
  },
  bodyStyle: {
    type: Object,
    require: true,
  },
  dishStyle: {
    type: Object,
    require: true,
  },
});

import { getPhoto } from "@/api/unsplashAPI";
const requestPhoto = await getPhoto(props.photoName);
const photo = requestPhoto.data.results[0].urls.regular;

import { useShowContent } from "@/composition/showContent";
const { isVisible, onVisible, offVisible } = useShowContent();
</script>

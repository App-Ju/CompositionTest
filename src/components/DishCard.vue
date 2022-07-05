<template>
  <div :style="styles.dish" @mouseenter="onVisible" @mouseleave="offVisible">
    <Photo :photo-name="photoName" :style="styles.img" />
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

import { defineAsyncComponent } from "vue";
const Photo = defineAsyncComponent({
  loader: () => import("@/components/PhotoLoader"),
  loadingComponent: () => import("@/components/LoadingComponent"),
  delay: 200,
  errorComponent: () => import("@/components/ErrorComponent"),
  timeout: 3000,
});

import { useShowContent } from "@/composition/showContent";
const { isVisible, onVisible, offVisible } = useShowContent();
</script>

<template>
  <div :style="dishStyle" @mouseenter="onVisible" @mouseleave="offVisible">
    <slot name="img" />
    <div :style="bodyStyle">
      <slot name="name" />
      <div v-show="isVisible" style="z-index: 1000">
        <slot name="description" />
      </div>
      <slot name="price" />
      <slot name="buttons" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useShowContent } from "@/composition/showContent";

export default defineComponent({
  name: "DishCard",
  setup() {
    const { isVisible, onVisible, offVisible } = useShowContent();

    return { isVisible, onVisible, offVisible };
  },
  props: {
    bodyStyle: {
      type: Object,
      require: true,
    },
    dishStyle: {
      type: Object,
      require: true,
    },
  },
});
</script>

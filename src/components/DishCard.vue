<template>
  <div :style="styles.dish" @mouseenter="onVisible" @mouseleave="offVisible">
    <img :src="requestPhoto" alt="#" :style="styles.img" />
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

<script lang="ts">
import { defineComponent } from "vue";
import { useShowContent } from "@/composition/showContent";
import { useGetPhoto } from "@/composition/getPhoto";

export default defineComponent({
  name: "DishCard",
  setup(props) {
    const { isVisible, onVisible, offVisible } = useShowContent();
    const { requestPhoto } = useGetPhoto(props.photoName!);

    return { isVisible, onVisible, offVisible, requestPhoto };
  },
  props: {
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
  },
});
</script>

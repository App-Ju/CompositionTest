<template>
  <img :src="photo" alt="#" />
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

<style lang="scss" scoped></style>

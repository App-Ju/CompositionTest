<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRestaurantsStore } from "@/store/restaurants";

export default defineComponent({
  name: "DishesView",
  components: {},
  setup() {
    const restaurantsStore = useRestaurantsStore();

    return {
      restaurantsStore,
    };
  },
  props: {},
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {},
  created() {
    console.log("created");
  },
  methods: {},
});
</script>

<style lang="scss" scoped></style>

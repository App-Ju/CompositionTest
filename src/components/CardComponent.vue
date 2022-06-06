<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.card {
  min-width: 200px;
  width: calc(100% / 3 - (11px + 16px) * 2);
  height: 100px;
  margin: 11px;
  padding: 16px;
  background: beige;
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

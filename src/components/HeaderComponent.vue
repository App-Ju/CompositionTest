<template>
  <nav class="nav">
    <router-link to="/">Все Рестораны</router-link>
    <router-link to="/order">
      <BootstrapIcon id="nav-cart" icon="cart4" />
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

export default defineComponent({
  name: "HeaderComponent",
  components: { BootstrapIcon },
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-cart {
  width: 25px;
  height: 25px;
}
</style>

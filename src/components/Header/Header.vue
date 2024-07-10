<template>
  <header>
    <div class="container">
      <NuxtLink :to="localePath('/')" @click="navbarStore.setMobileNavToFalse">
        <LogoEmjay_white_withText class="logo" />
      </NuxtLink>

      <Navbar />
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoEmjay_white_withText from "~/assets/svg/LogoEmjay_white_withText.vue";
import Navbar from "~/features/Navbar/components/Navbar.vue";
import { useNavbarStore } from "~/features/Navbar/stores/navbar.store";

const navbarStore = useNavbarStore();
const localePath = useLocalePath();
</script>

<style lang="scss">
header {
  @extend %flex-layout;
  height: $header-height;
  background-color: $neutral100;

  .container {
    @extend %flex-layout;
  }
}

.logo {
  height: 60px;

  fill: map-get($dark, "primary");
  stroke: map-get($dark, "primary");
}
</style>

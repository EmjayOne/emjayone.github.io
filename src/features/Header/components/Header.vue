<template>
  <header>
    <div class="container">
      <NuxtLink to="/">
        <LogoEmjay_white_withText class="logo" />
      </NuxtLink>

      <Navbar />
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoEmjay_white_withText from "~/assets/svg/LogoEmjay_white_withText.vue";
import Navbar from "~/features/Navbar/components/Navbar.vue";
</script>

<style lang="scss">
@import url("../styles/header.scss");
</style>

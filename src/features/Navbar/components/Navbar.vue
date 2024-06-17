<template>
  <MobileNavbar v-if="mobileView" />
  <PCNavbar v-if="!mobileView" />
</template>

<script setup lang="ts">
import MobileNavbar from "./MobileNavbar.vue";
import PCNavbar from "./PCNavbar.vue";

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  checkScreen();
});

const mobileView = ref(true);

const checkScreen = () => {
  mobileView.value = window.innerWidth < 768;
};
</script>

<style lang="scss">
@import url("../styles/navbar.scss");
</style>

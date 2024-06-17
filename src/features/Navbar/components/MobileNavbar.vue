<template>
  <nav id="mobileNav">
    <span class="material-symbols-outlined" @click="handleMobileNavToggle">
      menu
    </span>
    <ul v-if="mobileNav">
      <li>
        <NuxtLink to="/" @click="handleMobileNavToggle">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" @click="handleMobileNavToggle">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" @click="handleMobileNavToggle"
          >Projects</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/knowledge" @click="handleMobileNavToggle"
          >Knowledge</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const mobileNav = ref(false);

const handleMobileNavToggle = () => {
  mobileNav.value = !mobileNav.value;
};
</script>

<style lang="scss">
@import url("../styles/mobileNavbar.scss");
</style>

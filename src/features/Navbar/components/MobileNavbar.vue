<template>
  <nav id="mobileNav">
    <span
      v-if="!navbarStore.mobileNav"
      class="material-symbols-outlined"
      @click="navbarStore.setMobileNavToTrue"
    >
      menu
    </span>
    <span
      v-if="navbarStore.mobileNav"
      class="material-symbols-outlined text-highlight-primary"
      @click="navbarStore.setMobileNavToFalse"
    >
      close
    </span>
    <ul v-if="navbarStore.mobileNav">
      <li>
        <NuxtLink to="/" @click="navbarStore.setMobileNavToFalse">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" @click="navbarStore.setMobileNavToFalse">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" @click="navbarStore.setMobileNavToFalse">
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/experience" @click="navbarStore.setMobileNavToFalse">
          Experience
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useNavbarStore } from "../stores/navbar.store";

const navbarStore = useNavbarStore();
</script>

<style lang="scss">
@import url("../styles/mobileNavbar.scss");
</style>

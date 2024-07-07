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
        <NuxtLink
          :to="localePath('/')"
          @click="navbarStore.setMobileNavToFalse"
        >
          {{ $t("navbar.home") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="localePath('/about')"
          @click="navbarStore.setMobileNavToFalse"
        >
          {{ $t("navbar.about") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="localePath('/projects')"
          @click="navbarStore.setMobileNavToFalse"
        >
          {{ $t("navbar.projects") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="localePath('/expertise')"
          @click="navbarStore.setMobileNavToFalse"
        >
          {{ $t("navbar.expertise") }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useNavbarStore } from "../stores/navbar.store";

const navbarStore = useNavbarStore();
const localePath = useLocalePath();
</script>

<style lang="scss">
#mobileNav {
  span {
    cursor: pointer;
  }

  ul {
    width: $mobile-navbar-width;
    height: calc(100% - $header-height - $footer-height);

    border: $base-border-width solid map-get($dark, "primary");
    border-right: none;
    border-radius: $base-border-radius 0 0 $base-border-radius;
    background-color: $neutral90;

    padding: $base-padding;
    list-style-type: none;

    align-items: end;

    display: flex;
    flex-flow: column nowrap;
    gap: $base-padding;

    z-index: 2;
    position: absolute;
    left: calc(100% - $mobile-navbar-width);
    top: $header-height;

    li {
      &:hover {
        color: map-get($dark, "primary");
      }
    }
  }
}
</style>

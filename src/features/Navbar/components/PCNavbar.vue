<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="localePath('/')">{{ $t("navbar.home") }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/about')">{{ $t("navbar.about") }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/projects')">{{
          $t("navbar.projects")
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/expertise')">{{
          $t("navbar.expertise")
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style lang="scss">
nav {
  ul {
    padding: 0;
    list-style-type: none;

    display: flex;
    align-items: center;
    gap: $base-padding;

    li {
      &:hover {
        color: map-get($dark, "primary");
      }
    }
  }
}
</style>

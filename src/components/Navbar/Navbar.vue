<template>
  <nav class="navbar">
    <div class="container">
      <NuxtLink to="/">
        <LogoEmjay_white_withText class="logo" />
      </NuxtLink>

      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/knowledge">Knowledge</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import LogoEmjay_white_withText from "~/assets/svg/LogoEmjay_white_withText.vue";
</script>

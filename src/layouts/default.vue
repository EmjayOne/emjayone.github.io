<template>
  <div id="app">
    <Header />

    <main id="main">
      <slot />

      <Footer />
    </main>
  </div>
</template>

<script setup>
import Footer from "~/components/Footer/Footer.vue";
import Header from "~/components/Header/Header.vue";
</script>

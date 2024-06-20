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
import Footer from "~/features/Footer/components/Footer.vue";
import Header from "~/features/Header/components/Header.vue";
</script>

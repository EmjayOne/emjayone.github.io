<template>
  <section id="about" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-3">About Me</h2>
      <p>
        {{ about.en[1] }}
      </p>
      <p class="mt-3">
        {{ about.en[2] }}
      </p>
      <p class="mt-3">
        {{ about.en[3] }}
      </p>
    </div>
  </section>
</template>

<script setup>
import * as about from "~/data/About/index.json";
</script>

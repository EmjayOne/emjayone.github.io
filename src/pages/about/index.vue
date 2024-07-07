<template>
  <section id="about" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-3">{{ $t("about.title") }}</h2>
      <template v-for="(item, idx) in $tm('about.content')" :key="item">
        <p v-if="idx === 0">{{ $rt(item) }}</p>
        <p v-else class="mt-3">{{ $rt(item) }}</p>
      </template>
    </div>
  </section>
</template>

<script setup></script>

<template>
  <a id="externalLink" :href="props.href" target="_blank">
    <p>{{ props.text }}</p>
    <span class="material-symbols-outlined"> link </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  href: string;
}>();
</script>

<style lang="scss"></style>

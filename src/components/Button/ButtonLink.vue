<template>
  <a id="externalLink" :href="props.href" target="_blank">
    <p>{{ props.text }}</p>
    <span class="material-symbols-outlined"> arrow_outward </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  href: string;
}>();
</script>

<style lang="scss">
#externalLink {
  color: map-get($dark, "primary");
  background-color: map-get($dark, "background");
  text-decoration: none;
  cursor: pointer;
  padding: $base-padding $base-padding * 2;
  border-radius: $base-border-radius;
  border: $base-border-width solid map-get($dark, "primary");

  display: inline-flex;
  flex-flow: row nowrap;
  gap: 3px;

  &:hover {
    background-color: map-get($dark, "primary");
    border-color: map-get($dark, "primary");
    color: map-get($dark, "text");
  }

  span {
    align-self: center;
  }
}
</style>

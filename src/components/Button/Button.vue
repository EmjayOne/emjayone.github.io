<template>
  <button @click="props.handler">{{ props.title }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  handler: (...args: any[]) => VoidFunction;
}>();
</script>

<style lang="scss">
button {
  color: map-get($dark, "primary");
  background-color: map-get($dark, "background");
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  border: 0;
  padding: $base-padding $base-padding * 2;
  border-radius: $base-border-radius;
  border: $base-border-width solid map-get($dark, "primary");

  &:hover {
    background-color: map-get($dark, "primary");
    border-color: map-get($dark, "primary");
    color: map-get($dark, "text");
  }
}
</style>

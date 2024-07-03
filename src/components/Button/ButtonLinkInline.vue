<template>
  <a id="externalLinkInline" :href="props.href" target="_blank">
    <span class="linkContainer">
      <span class="underline">{{ props.text }}</span>
      <span class="material-symbols-outlined"> arrow_outward </span>
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  href: string;
}>();
</script>

<style lang="scss">
#externalLinkInline {
  color: map-get($dark, "primary");
  background-color: map-get($dark, "background");
  text-decoration: none;
  cursor: pointer;

  display: inline-flex;
  flex-flow: row nowrap;
  gap: 3px;

  &:hover {
    .underline {
      text-decoration: underline;
    }
  }

  .linkContainer {
    span {
      vertical-align: bottom;
    }
  }
}
</style>

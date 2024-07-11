<template>
  <NuxtLink
    :to="localePath(`/${props.href}/${props.project.id.loc.source}`)"
    id="card"
  >
    <div class="card-container">
      <h1>{{ props.project.title.loc.source }}</h1>
      <div class="card-date">{{ props.project.date.loc.source }}</div>
      <div class="card-tags">
        <template v-for="tag in props.project.tags" :key="tag">
          <div class="card-tag">{{ tag.loc.source }}</div>
        </template>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: any;
  href: string;
}>();

const localePath = useLocalePath();
</script>

<style scoped lang="scss">
#card {
  height: 20rem;
  padding: $base-padding;

  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  border: 2px solid map-get($dark, "primary");
  border-radius: $base-border-radius;

  display: flex;
  align-items: flex-end;

  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 5px map-get($dark, "text");
    -webkit-box-shadow: 0 0 5px map-get($dark, "text");
  }

  .card {
    &-container {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      gap: $base-margin;

      h1 {
        height: 12.75rem;
        width: 100%;
        color: map-get($dark, "text");

        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
      }
    }

    &-date {
      padding: $base-padding;
      opacity: 0.8;

      font-size: $font-size-sm;

      position: absolute;
      top: 0;
      right: 0;
    }

    &-tags {
      display: flex;
    }

    &-tag {
      background-color: map-get($dark, "tertiary");

      padding: 0 $base-padding * 0.5;
      margin-right: $base-margin * 0.5;

      border-radius: $base-border-radius * 0.4;

      font-size: $font-size-sm;
    }
  }
}
</style>

<template>
  <NuxtLink :to="`/projects/${project.id}`" id="card">
    <div class="card-container">
      <h1>{{ project.title }}</h1>
      <p>{{ project.text }}</p>
      <div class="card-date">{{ project.date }}</div>
      <div class="card-tags">
        <template v-for="tag in project.tags" :key="tag">
          <div class="card-tag">{{ tag }}</div>
        </template>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TProject } from "~/assets/types/Card";

const { project } = defineProps<TProject>();
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
      display: flex;
      flex-flow: column wrap;
      gap: $base-margin;

      h1 {
        height: 5rem;
        color: map-get($dark, "text");
      }

      p {
        height: 7rem;

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
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

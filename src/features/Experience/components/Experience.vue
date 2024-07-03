<template>
  <section id="knowledge" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-2">My Experiences</h2>
      <div class="row gap-2">
        <template v-for="item in experienceStore.experiences" :key="item">
          <div class="col-12-xxs col-6-md col-3-lg">
            <Card :project="item" href="experience" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useExperiencesStore } from "../stores/experience.store";

const experienceStore = useExperiencesStore();
</script>

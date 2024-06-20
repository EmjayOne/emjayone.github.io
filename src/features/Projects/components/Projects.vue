<template>
  <section id="projects" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-2">My Projects</h2>
      <div class="row gap-2">
        <template v-for="item in projectsStore.projects" :key="item">
          <div class="col-12-xxs col-6-md col-3-lg">
            <Card :project="item.project" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "../stores/projects.store";

onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});

const projectsStore = useProjectsStore();
</script>

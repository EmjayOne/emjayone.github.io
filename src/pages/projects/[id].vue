<template>
  <section>
    <ProjectDetails v-if="project" :project="project.project" />
  </section>
</template>

<script setup lang="ts">
import type { TProject } from "~/assets/types/Card";
import { useProjectsStore } from "~/features/Projects/stores/projects.store";

onMounted(() => {
  const { id } = useRoute().params;
  project.value = projectsStore.getProjectById(id as string);
  if (!project.value)
    throw createError({ statusCode: 404, statusMessage: "Project not found." });
});

const projectsStore = useProjectsStore();
const { id } = useRoute().params;

const project = ref<TProject | undefined>(undefined);

project.value = projectsStore.getProjectById(id as string);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found." });
</script>

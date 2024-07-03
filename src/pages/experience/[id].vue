<template>
  <ExperienceDetails v-if="project" :project="project.project" />
</template>

<script setup lang="ts">
import type { TProject } from "~/assets/types/Card";
import ExperienceDetails from "~/components/ExperienceDetails/ExperienceDetails.vue";
import { useExperiencesStore } from "~/features/Experience/stores/experience.store";

onMounted(() => {
  const { id } = useRoute().params;
  project.value = experienceStore.getExperienceById(id as string);
  if (!project.value)
    throw createError({ statusCode: 404, statusMessage: "Project not found." });

  document.getElementById("main")?.scrollTo(0, 0);
});

const experienceStore = useExperiencesStore();
const { id } = useRoute().params;

const project = ref<TProject | undefined>(undefined);

project.value = experienceStore.getExperienceById(id as string);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found." });
</script>

<template>
  <ExpertiseDetails v-if="project" :project="project.project" />
</template>

<script setup lang="ts">
import type { TProject } from "~/assets/types/Card";
import ExpertiseDetails from "~/components/ExpertiseDetails/ExpertiseDetails.vue";
import { useExpertiseStore } from "~/features/Expertise/stores/expertise.store";

onMounted(() => {
  const { id } = useRoute().params;
  project.value = expertiseStore.getExpertiseById(id as string);
  if (!project.value)
    throw createError({ statusCode: 404, statusMessage: "Project not found." });

  document.getElementById("main")?.scrollTo(0, 0);
});

const expertiseStore = useExpertiseStore();
const { id } = useRoute().params;

const project = ref<TProject | undefined>(undefined);

project.value = expertiseStore.getExpertiseById(id as string);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found." });
</script>

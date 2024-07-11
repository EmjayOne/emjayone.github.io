<template>
  <ProjectDetails v-if="project" :project="project" />
</template>

<script setup lang="ts">
import ProjectDetails from "~/components/ProjectDetails/ProjectDetails.vue";

onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});

const { tm } = useI18n();
const { id } = useRoute().params;

const project = ref();
const projects = computed(() => tm("projects.projects") as any);

project.value = projects.value.find((item: any) => item.id.loc.source === id);

if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found." });
</script>

<template>
  <ExpertiseDetails v-if="expertise" :expertise="expertise" />
</template>

<script setup lang="ts">
import ExpertiseDetails from "~/components/ExpertiseDetails/ExpertiseDetails.vue";

onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});

const { tm } = useI18n();
const { id } = useRoute().params;

const expertise = ref();
const expertises = computed(() => tm("expertise.expertise") as any);

expertise.value = expertises.value.find(
  (item: any) => item.id.loc.source === id
);

if (!expertise.value)
  throw createError({ statusCode: 404, statusMessage: "Expertise not found." });
</script>

<template>
  <section id="projects" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-2">{{ $t("projects.title") }}</h2>
      <div class="row gap-2">
        <template v-for="item in projects" :key="item">
          <div class="col-12-xxs col-6-md col-3-lg">
            <Card :project="item" href="projects" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});

const { tm } = useI18n();

const projects = computed(() => tm("projects.projects") as any);
</script>

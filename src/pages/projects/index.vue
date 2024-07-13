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
  sortProjects();
});

const { locale, tm, rt } = useI18n();

const projects = computed(() => tm("projects.content") as any);

const sortProjects = () => {
  projects.value.sort((a: any, b: any) => {
    const dateA = rt(a.date).split("/");
    const monthA = parseInt(dateA[0]);
    const yearA = parseInt(dateA[1]);
    const dateB = rt(b.date).split("/");
    const monthB = parseInt(dateB[0]);
    const yearB = parseInt(dateB[1]);

    if (yearA < yearB) return 1;
    if (yearA > yearB) return -1;
    if (yearA === yearB) {
      if (monthA < monthB) return 1;
      if (monthA > monthB) return -1;
    }

    return 0;
  });
};

watch(locale, () => sortProjects());
</script>

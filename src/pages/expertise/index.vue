<template>
  <section id="knowledge" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-2">{{ $t("expertise.title") }}</h2>
      <div class="row gap-2">
        <template v-for="item in expertise" :key="item">
          <div class="col-12-xxs col-6-md col-3-lg">
            <Card :project="item" href="expertise" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  sortExpertises();

  document.getElementById("main")?.scrollTo(0, 0);
});

const { locale, tm } = useI18n();

const expertise = computed(() => tm("expertise.expertise") as any);

const sortExpertises = () => {
  expertise.value.sort((a: any, b: any) => {
    const titleA = (a.title.loc.source as string).toUpperCase();
    const titleB = (b.title.loc.source as string).toUpperCase();

    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
};

watch(locale, () => sortExpertises());
</script>

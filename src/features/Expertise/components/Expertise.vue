<template>
  <section id="knowledge" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-2">{{ $t("expertise.title") }}</h2>
      <div class="row gap-2">
        <template v-for="item in expertiseStore.expertise" :key="item">
          <div class="col-12-xxs col-6-md col-3-lg">
            <Card :project="item" href="expertise" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useExpertiseStore } from "../stores/expertise.store";

const expertiseStore = useExpertiseStore();
</script>

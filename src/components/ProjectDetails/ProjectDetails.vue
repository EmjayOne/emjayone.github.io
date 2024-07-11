<template>
  <section class="mt-3 pb-4">
    <div class="container">
      <NuxtLink
        :to="localePath('/projects')"
        @click="navbarStore.setMobileNavToFalse"
      >
        <span class="text-highlight-primary return"> arrow_back </span>
      </NuxtLink>
      <h2 class="text-highlight-primary mb-3 pt-3">
        {{ $rt(project.title) }}
      </h2>
      <template v-for="desc in project.details.desc" :key="desc">
        <p class="mb-3">{{ $rt(desc) }}</p>
      </template>
      <ul v-for="task in project.details.task" :key="task">
        <li class="mb-1">{{ $rt(task) }}</li>
      </ul>
      <ButtonLink
        class="externalLink mt-4"
        v-if="project.details.link"
        :text="$t('projects.visitProjectWebsite')"
        :href="$rt(project.details.link)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNavbarStore } from "~/features/Navbar/stores/navbar.store";

defineProps(["project"]);

const navbarStore = useNavbarStore();
const localePath = useLocalePath();
</script>

<style lang="scss">
.return {
  font-family: "Material Symbols Outlined";
  font-size: $font-size-xl;
  font-weight: 700;
}

.externalLink {
  float: right;
}
</style>

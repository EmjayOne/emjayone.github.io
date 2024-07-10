<template>
  <section id="home" class="mt-3 pt-4 pb-4">
    <div class="container">
      <div class="row justify-center">
        <div class="col-12-xxs col-6-md">
          <h2 id="welcome">
            <div>{{ $t("home.welcome") }}</div>
            <div class="text-highlight-primary">{{ $t("home.website") }}</div>
          </h2>
          <p class="mt-2 mb-3">{{ $t("home.caption") }}</p>
          <div class="row gap-2 justify-center pt-2 pb-3">
            <NuxtLink
              :to="localePath('/about')"
              @click="navbarStore.setMobileNavToFalse"
            >
              <Button :title="$t('home.btnAbout')" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/projects')"
              @click="navbarStore.setMobileNavToFalse"
            >
              <Button :title="$t('home.btnProjects')" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/expertise')"
              @click="navbarStore.setMobileNavToFalse"
            >
              <Button :title="$t('home.btnExpertise')" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/Button/Button.vue";
import { useNavbarStore } from "~/features/Navbar/stores/navbar.store";

onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});

const navbarStore = useNavbarStore();

const localePath = useLocalePath();
</script>

<style lang="scss">
#welcome {
  font-size: $font-size-xl;
}

@include xs {
  #welcome {
    font-size: $font-size-xxl;
  }
}
</style>

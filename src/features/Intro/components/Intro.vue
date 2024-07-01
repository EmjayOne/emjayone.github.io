<script setup lang="ts">
import Button from "~/components/Button/Button.vue";
</script>

<template>
  <section id="intro" class="mt-3 pt-4 pb-4">
    <div class="container">
      <div class="row justify-center">
        <div class="col-12-xxs col-6-md">
          <h2 id="welcome">
            <div>Welcome to</div>
            <div class="text-highlight-primary">My Website</div>
          </h2>
          <p class="mt-2 mb-3">
            Martin Junghans &centerdot; Software Developer &centerdot;
            Professionally since 2019
          </p>
          <div class="row gap-2 justify-center pt-2 pb-3">
            <NuxtLink to="/about">
              <Button title="About me" />
            </NuxtLink>
            <NuxtLink to="/projects">
              <Button title="Explore my projects" />
            </NuxtLink>
            <NuxtLink to="/experience">
              <Button title="Learn about my experiences" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import url("../styles/intro.scss");
</style>

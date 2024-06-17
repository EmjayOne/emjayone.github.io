<template>
  <div id="error">
    <section>
      <div class="container">
        <h2>{{ error.statusCode }}</h2>
        <p>Ooops...</p>
        <p>{{ error.statusMessage }}</p>
        <button class="mt-3" @click="handleError">Home</button>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped lang="scss">
#error {
  width: 100vw;
  height: 100vh;

  background-color: map-get($dark, "background");

  display: flex;
}

section {
  flex: 1;

  align-content: center;
  text-align: center;

  h2 {
    color: map-get($dark, "primary");
    font-size: $font-size-xxl;
  }

  button {
    color: map-get($dark, "primary");
    background-color: map-get($dark, "background");
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    border: 0;
    padding: $base-padding $base-padding * 2;
    border-radius: $base-border-radius;
    border: $base-border-width solid map-get($dark, "primary");
    &:hover {
      background-color: map-get($dark, "primary");
      border-color: map-get($dark, "primary");
      color: map-get($dark, "text");
    }
  }
}
</style>

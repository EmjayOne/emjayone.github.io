<template>
  <div id="languageSwitcher" class="row">
    <span class="material-symbols-outlined"> language </span>
    <select v-model="switchLocale">
      <option selected v-for="item in locales" :key="item" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const switchLocale = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<style lang="scss">
#languageSwitcher {
  overflow-y: hidden;

  select {
    background-color: map-get($dark, "tertiary");
    border: none;

    font-family: "Poppins";
    font-size: $font-size-sm;
    font-weight: 700;

    option {
      font-family: "Poppins";
      font-size: $font-size-sm;
      font-weight: 400;
    }
  }
}
</style>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <LanguageSwitcher class="col-6-xxs col-4-md" />
        <NuxtLink
          :to="localePath('/impressum')"
          class="col-6-xxs col-4-md impressum"
        >
          {{ $t("footer.impressum") }}
        </NuxtLink>
        <span class="col-12-xxs col-4-md copyright"
          >Copyright 2024 Martin Junghans</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LanguageSwitcher from "~/components/LanguageSwitcher/LanguageSwitcher.vue";

const localePath = useLocalePath();
</script>

<style lang="scss">
footer {
  min-height: $footer-height;
  max-height: $footer-height;

  background-color: map-get($dark, "tertiary");

  padding: $base-padding * 2 0;
  margin-top: $base-margin * 4;

  display: flex;
  align-items: center;

  font-size: $font-size-sm;

  @include md {
    min-height: 75px;
    max-height: 75px;
  }

  .row {
    overflow-y: auto;
    align-items: center;

    .impressum {
      text-align: end;

      @include md {
        text-align: center;
      }
    }

    .copyright {
      padding-top: $base-padding;
      text-align: center;

      @include md {
        padding-top: 0;
        text-align: right;
      }
    }
  }
}
</style>

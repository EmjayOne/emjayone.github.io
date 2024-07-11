<template>
  <section id="about" class="mt-3 pt-4 pb-4">
    <div class="container">
      <h2 class="text-highlight-primary mb-3">{{ $t('impressum.title') }}</h2>
      <p>
        {{ $t('impressum.webmaster.name') }}
      </p>
      <p>
        {{ $t('impressum.webmaster.address') }}
      </p>
      <p>
        {{ $t('impressum.webmaster.city') }}
      </p>
      <p>
        {{ $t('impressum.webmaster.country') }}
      </p>
      <p class="mt-1">
        {{ $t('impressum.webmaster.contact.phone') }}
      </p>
      <p class="mt-1">
        {{ $t('impressum.webmaster.contact.mail') }}
      </p>

      <h3 class="mt-3 mb-2">{{ $t('impressum.dsgvo.title') }}</h3>
      <ol type="I">
        <template v-for="item in $tm('impressum.dsgvo.ol')" :key="item">
          <li class="h3 mt-1 mb-1">{{ $rt(item.romanBig.title) }}</li>
          <ol v-if="item.romanBig.details" type="1">
            <template v-for="(roman, idRoman) in item.romanBig.details">
              <li class="h3 mt-1 mb-1">{{ $rt(roman.number.title) }}</li>
              <ol v-if="roman.number.details" type="a">
                <template v-for="(number, idNumber) in roman.number.details">
                  <li class="h3 mt-1 mb-1">{{ $rt(number.letterSmall.title) }}</li>
                  <template
                    v-for="(letter, idLetter) in number.letterSmall.content"
                    :key="letter"
                  >
                    <ul v-if="letter.ul">
                      <template v-for="liItem in letter.ul" :key="liItem">
                        <li>{{ $rt(liItem) }}</li>
                      </template>
                    </ul>
                    <p
                      v-else-if="
                        idRoman === 1 && idNumber === 2 && idLetter === 0
                      "
                    >
                      {{ $rt(letter) }}
                      <div class="pt-1 pb-1">
                        <p>{{ $t('impressum.hoster.name') }}</p>
                        <p>{{ $t('impressum.hoster.address') }}</p>
                        <p>{{ $t('impressum.hoster.city') }}</p>
                        <p>{{ $t('impressum.hoster.country') }}</p>
                        <p>{{ $t('impressum.hoster.contact.mail') }}</p>
                      </div>
                    </p>
                    <p
                      v-else-if="
                        idRoman === 1 && idNumber === 2 && idLetter === 2
                      "
                    >
                    {{ $rt(letter) }}
                    <ButtonLinkInline
                      text="GitHub General Privacy Statement"
                      :href="$t('impressum.hoster.dsgvo')"
                    />
                  </p>
                    <p v-else>{{ $rt(letter) }}</p>
                  </template>
                </template>
              </ol>
              <template
                v-for="(number, idx) in roman.number.content"
                :key="number"
              >
                <p v-if="idx === 0">
                  {{ $rt(number) }} {{ $t('impressum.webmaster.name') }},
                  {{ $t('impressum.webmaster.address') }},
                  {{ $t('impressum.webmaster.city') }},
                  {{ $t('impressum.webmaster.country') }}
                  ({{ $t('impressum.webmaster.contact.mail') }}).
                </p>
                <p v-if="idx === 1">
                  {{ $rt(number) }} {{ $t('impressum.webmaster.contact.mail') }}.
                </p>
                <p v-if="idx === 2">
                  {{ $rt(number) }} {{ $t('impressum.webmaster.address') }},
                  {{ $t('impressum.webmaster.city') }},
                  {{ $t('impressum.webmaster.country') }}.
                </p>
              </template>
            </template>
          </ol>
          <template v-for="roman in item.romanBig.content" :key="roman">
            <p>{{ $rt(roman) }}</p>
          </template>
        </template>
      </ol>

      <h3 class="mt-3 mb-2">{{ $t('impressum.licenses.title') }}</h3>
      <ul>
        <template v-for="item in $tm('impressum.licenses.content')" :key="item">
          <li class="pb-2">
            <span>{{ $rt(item.title) }}</span>
            <ul>
              <template v-for="entry in item.content" :key="entry">
                <li class="pt-1">{{ $rt(entry.product) }}</li>
                <ul>
                  <li v-if="entry.author">{{ $rt(entry.author) }}</li>
                  <li>
                    <ButtonLinkInline :text="$rt(entry.license.title)" :href="$rt(entry.license.href)" />
                  </li>
                </ul>
              </template>
            </ul>
          </li>
        </template>
      </ul>

    </div>
  </section>
</template>

<script setup>
import ButtonLinkInline from '~/components/Button/ButtonLinkInline.vue';

onMounted(() => {
  document.getElementById("main")?.scrollTo(0, 0);
});
</script>

<style lang="scss">
.h3 {
  font-weight: 700;
}
</style>

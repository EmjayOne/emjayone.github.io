<template>
  <section class="mt-3 pb-4">
    <div class="container">
      <NuxtLink :to="localePath('/expertise')" @click="navbarStore.setMobileNavToFalse">
        <span class="text-highlight-primary return"> arrow_back </span>
      </NuxtLink>
      <h2 class="text-highlight-primary mb-3 pt-3">{{ $rt(expertise.title) }}</h2>
      <template v-for="item in expertise.details.content" :key="item">
        <section id="expertiseSection">
          <h4 v-if="item.title">
            {{ $rt(item.title) }}
          </h4>
          
          <div v-if="item.summary" class="summary">
            <p>{{ $t('expertise.summary') }}</p>
            <span>{{ $rt(item.summary) }}</span>
          </div class="summary">

          <h5 v-if="item.subtitle">
            {{ $rt(item.subtitle) }}
          </h5>
          
          <div
            v-if="item.video"
            class="expertiseContainer"
          >
            <iframe
              width="560"
              height="315"
              :src="$rt(item.video)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <template v-for="paragraph in item.p">
            <p v-if="paragraph.ol">
              <ol>
                <template v-for="item in paragraph.ol" :key="item">
                  <li>{{ $rt(item) }}</li>
                </template>
              </ol>
            </p>
            
            <p v-else-if="paragraph.ul">
              <ul>
                <template v-for="item in paragraph.ol" :key="item">
                  <li>{{ $rt(item) }}</li>
                </template>
              </ul>
            </p>
            
            <p v-else>{{ $rt(paragraph) }}</p>
          </template>
          
          <div
            v-if="item.img"
            class="expertiseContainer"
          >
            <img :src="$rt(item.img)" alt="" />  
          </div>

          <ul v-if="item.li">
            <template
              v-for="list in item.li"
              :key="list"
            >
              <li>
                <ButtonLinkInline :text="$rt(list.text)" :href="$rt(list.href)" />
              </li>
            </template>
          </ul>
          
          <div
            v-if="item.svg"
            class="expertiseContainer"
          >
            <BackendRoadmap
              v-if="$rt(item.svg) ===
            'BackendRoadmap'"
              class="roadmap"
            />
            <FrontendRoadmap 
             v-if="$rt(item.svg) ===
            'FrontendRoadmap'"
              class="roadmap" 
            />
          </div>
        </section>
      </template>

      <section
        v-if="expertise.details.source"
        id="expertiseSection"
        class="mt-5"
      >
        <p>{{ $t('expertise.sources') }}{{ ':' }}</p>
        <ul>
          <template v-for="list in expertise.details.source" :key="item">
            <li>
              <ButtonLinkInline
                :text="$rt(list.text)"
                :href="$rt(list.href)"
              />
            </li>
          </template>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackendRoadmap from "~/assets/svg/BackendRoadmap.vue";
import FrontendRoadmap from "~/assets/svg/FrontendRoadmap.vue";
import { useNavbarStore } from "~/features/Navbar/stores/navbar.store";

defineProps(["expertise"]);

const navbarStore = useNavbarStore();

const localePath = useLocalePath()
</script>

<style lang="scss">
.return {
  font-family: "Material Symbols Outlined";
  font-size: $font-size-xl;
  font-weight: 700;
}

#expertiseSection {
  h4 {
    padding: 2rem 0 1rem;
    font-size: $font-size-lg;
  }

  h5 {
    padding: 1rem 0;
    font-size: $font-size-lg;
    font-weight: 400;
    text-decoration: underline;
  }

  p {
    padding: 1rem 0;

    code {
      border-radius: calc($base-border-radius / 4);
    }
  }

  li {
    padding: 0.5rem 0;
  }

  .summary {
    margin: 2rem 2rem;
    padding: 1rem 2rem;

    border: 1px solid map-get($dark, "primary" );
    border-radius: $base-border-radius;

    display: flex;
    flex-flow: row wrap;
    
    span {
      color: map-get($dark, "primary" );
    }
  }

  .expertiseContainer {
    padding: 1rem 0;

    display: flex;
    justify-content: center;

    iframe {
      width: 100%;
      height: 315px;
      max-width: 560px;
    }

    .roadmap {
      background-color: white;
    }
  }
}
</style>

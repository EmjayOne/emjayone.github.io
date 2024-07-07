<template>
  <section class="mt-3 pb-4">
    <div class="container">
      <NuxtLink :to="localePath('/expertise')" @click="navbarStore.setMobileNavToFalse">
        <span class="text-highlight-primary return"> arrow_back </span>
      </NuxtLink>
      <h2 class="text-highlight-primary mb-3 pt-3">{{ project.title }}</h2>
      <template v-for="item in project.details.content" :key="item">
        <section id="expertiseSection">
          <h4 v-if="(item as TExpertiseContent).title">
            {{ (item as TExpertiseContent).title }}
          </h4>
          
          <div v-if="(item as TExpertiseContent).summary" class="summary">
            <p>Summary</p>
            <span>{{ (item as TExpertiseContent).summary }}</span>
          </div class="summary">

          <h5 v-if="(item as TExpertiseContent).subtitle">
            {{ (item as TExpertiseContent).subtitle }}
          </h5>
          
          <div
            v-if="(item as TExpertiseContent).video"
            class="expertiseContainer"
          >
            <iframe
              width="560"
              height="315"
              :src="(item as TExpertiseContent).video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <template v-for="paragraph in (item as TExpertiseContent).p">
            <p v-if="(paragraph as TExpertiseContentStringList).ol">
              <ol>
                <template v-for="item in (paragraph as TExpertiseContentStringList).ol" :key="item">
                  <li>{{ item }}</li>
                </template>
              </ol>
            </p>
            
            <p v-else-if="(paragraph as TExpertiseContentStringList).ul">
              <ul>
                <template v-for="item in (paragraph as TExpertiseContentStringList).ol" :key="item">
                  <li>{{ item }}</li>
                </template>
              </ul>
            </p>
            
            <p v-else>{{ paragraph }}</p>
          </template>
          
          <div
            v-if="(item as TExpertiseContent).img"
            class="expertiseContainer"
          >
            <img :src="(item as TExpertiseContent).img" alt="" />  
          </div>

          <ul v-if="(item as TExpertiseContent).li">
            <template
              v-for="list in (item as TExpertiseContent).li"
              :key="list"
            >
              <li>
                <ButtonLinkInline :text="list.text" :href="list.href" />
              </li>
            </template>
          </ul>
          
          <div
            v-if="(item as TExpertiseContent).svg"
            class="expertiseContainer"
          >
            <BackendRoadmap
              v-if="(item as TExpertiseContent).svg ===
            'BackendRoadmap'"
              class="roadmap"
            />
            <FrontendRoadmap 
             v-if="(item as TExpertiseContent).svg ===
            'FrontendRoadmap'"
              class="roadmap" 
            />
          </div>
        </section>
      </template>

      <section
        v-if="project.details.source"
        id="expertiseSection"
        class="mt-5"
      >
        <p>{{ "Sources: " }}</p>
        <ul>
          <template v-for="list in project.details.source" :key="item">
            <li>
              <ButtonLinkInline
                :text="(list as TExpertiseContentLinkList).text"
                :href="(list as TExpertiseContentLinkList).href"
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
import type {
  TExpertiseContent,
  TExpertiseContentLinkList,
  TExpertiseContentStringList,
  TProject,
} from "~/assets/types/Card";
import { useNavbarStore } from "~/features/Navbar/stores/navbar.store";

const { project } = defineProps<TProject>();

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

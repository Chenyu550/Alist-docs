<script setup lang="ts">
import { usePageData } from "@vuepress/client"
import { computed } from "vue"

const pageData = usePageData()

const isZh = computed(() => {
  return pageData.value.path.startsWith("/zh/")
})

const vidHubEn = {
  title: "",
  hero: [],
  url: "",
  tag: "",
  new_site: "　This version is free from code poisoning, safe to use　",
}

const vidHubCN = {
  title: "",
  hero: [],
  url: "",
  tag: "",
  new_site: "　这是没有被投毒过的版本，请放心食用　",
}

const vidHub = computed(() => {
  if (isZh.value) return vidHubCN
  return vidHubEn
})

const isApple = computed(() => {
  if (navigator.platform) return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
})
</script>

<template>
  <div class="ads-container">
    <div class="wwads-container">
      <div
        class="wwads wwads-cn wwads-horizontal"
        data-id="213"
        style="width: 100% !important"
        v-if="!isApple"
      ></div>
      <a v-else class="vidhub" :href="vidHub.url" target="_blank">
        <div>
          <img src="" alt="" />
          <div>
            <div class="title">
              <span>{{ vidHub.title }}</span>
              <span class="tag">{{ vidHub.tag }}</span>
            </div>
            <div class="hero" v-for="hero in vidHub.hero" :key="hero">
              {{ hero }}
            </div>
          </div>
        </div>
      </a>
      <a class="new_site" href="" target="_blank">{{ vidHub.new_site }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new_site {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: larger;
  font-weight: bold;
  border: 1px solid #aaaaaa50;
  border-radius: 10px;
  padding: 10px 0;
  color: #70C6BE;
  text-decoration: none;
}
.vidhub {
  width: 100%;
  height: 150px;
  background-image: url(/img/ss/vidhub-bg.png);
  background-size: cover;
  background-position: right;
  border-radius: 14px;
  display: block;
  padding-right: 4px;
  @media screen and (max-width: 700px) {
    height: 160px;
  }
  div {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;

    img {
      height: 60%;
      width: auto;
      @media screen and (max-width: 700px) {
        height: 40%;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      .title {
        color: white;
        font-weight: bold;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        padding-bottom: 5px;
        @media screen and (max-width: 700px) {
          font-size: medium;
          word-break: break-all;
        }
        .tag {
          background-color: green;
          display: inline;
          border-radius: 40px;
          padding: 6px;
          padding-left: 14px;
          padding-right: 14px;
          margin-left: 4px;
          white-space: nowrap;
        }
      }
      .hero {
        height: auto;
        color: rgb(194, 193, 193);
        @media screen and (max-width: 700px) {
          font-size: small;
        }
      }
    }
  }
}
.ss {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: large;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .mingdao {
    display: flex;
    justify-content: center;

    a {
      max-width: min(500px, 100%);

      img {
        width: 100%;
      }
    }
  }
}

.ads-container {
  display: flex;
  justify-content: center;
}

.wwads-container {
  padding-top: 10px !important;
  padding-bottom: 0 !important;
  :deep(img) {
    display: unset;
    max-width: unset;
    max-height: unset;
    margin: unset;
  }
  max-width: var(--home-page-width);
}
</style>

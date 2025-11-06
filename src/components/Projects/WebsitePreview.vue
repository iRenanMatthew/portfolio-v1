<template>
  <div class="showcase-card-wrapper pb-[50px]">
    <div
      v-for="website in websites"
      :key="website.id"
      class="showcase-card"
      @click="redirectURL(website.webLink)"
    >
      <div class="scale-img">
        <img :src="'/projects/' + website.webImg" />
      </div>

      <div class="showcase-card-content">
        <h4>{{ website.webName }}</h4>
        <strong class="mb-3"><p><span>Tech Tools: </span>{{ website.webTechTools }}</p></strong>
        <p>{{ website.webDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import getWebsiteData from "@/composables/getWebsiteData";
import { onMounted } from "vue";

const { websites, error, loadWebsiteData } = getWebsiteData();

const redirectURL = (url) => {
  window.open(url, "_blank");
};

onMounted(async () => {
  loadWebsiteData();
});
</script>

<style scoped>
.showcase-card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
  padding-bottom: 100px;
}

.showcase-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 117, 153);
  border-radius: 30px;
}

.showcase-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
  transition: all 150ms ease-in;
}

.showcase-card:hover img {
  scale: 1.1;
}

.scale-img {
  overflow: hidden;
  border-radius: 30px 30px 0 0;
}

.showcase-card-content {
  padding: 30px 20px;
  background-color: #fcfcfc;
  color: #000000;
  border-radius: 0px 0px 30px 30px;
  min-height: 200px;
  flex-grow: 1;
}

.showcase-card-content h4 {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  .showcase-card-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div class="showcase-card-wrapper">
    <div
      v-for="video in videos"
      :key="video.id"
      class="showcase-card"
      @click="redirectURL(video.videoLink)"
    >
      <div class="scale-img">
        <img :src="'/projects/' + video.videoImg" />
      </div>

      <div class="showcase-card-content">
        <h4>{{ video.videoName }}</h4>
        <p>{{ video.videoDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import getVideoCreations from "@/composables/getVideoCreations";
import { onMounted } from "vue";

const { videos, error, loadVideoCreations } = getVideoCreations();

const redirectURL = (url) => {
  window.open(url, "_blank");
};

onMounted(async () => {
  loadVideoCreations();
});
</script>

<style scoped>
.showcase-card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
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

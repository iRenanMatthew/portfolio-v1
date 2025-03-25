<template>
  <div class="section">
    <div class="email row">
      <CategoryTitle title="Video Creations" size="5xl" tag="h1" />
      <VideoCreationsPreview />
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import VideoCreationsPreview from "@/components/Projects/VideoCreationsPreview.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const updateTitle = () => {
  const pageTitle =
    route.meta.title || "Video Creations — Renan Matthew Portfolio";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle();
});
</script>
<style scoped></style>

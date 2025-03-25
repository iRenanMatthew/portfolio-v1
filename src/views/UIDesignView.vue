<template>
  <div class="section">
    <div class="email row">
      <CategoryTitle title="UI Designs" size="5xl" tag="h1" />
      <UIDesignPreview />
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import UIDesignPreview from "@/components/Projects/UIDesignPreview.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || "UI Designs — Renan Matthew Portfolio";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle();
});
</script>
<style scoped></style>

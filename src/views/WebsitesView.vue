<template>
    <div class="section">
      <div class="email row">
        <CategoryTitle title="Websites" size="5xl" tag="h1" />
        <WebsitePreview/>
      </div>
    </div>
</template>
  
<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import WebsitePreview from "@/components/Projects/WebsitePreview.vue";
import { onMounted } from "vue";
import { useRoute } from 'vue-router';


const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || 'Websites — Renan Matthew Portfolio'
  document.title = pageTitle;
}

onMounted(() => {
  updateTitle();
});
</script>
<style scoped>
</style>

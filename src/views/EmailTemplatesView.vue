<template>
    <div class="section">
      <div class="email row">
        <CategoryTitle title="Email Templates" size="5xl" tag="h1" />
        <EmailPreview/>
      </div>
    </div>
</template>
  
<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import EmailPreview from "@/components/Projects/EmailPreview.vue";
import { onMounted } from "vue";
import { useRoute } from 'vue-router';


const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || 'Email Template — Renan Matthew Portfolio'
  document.title = pageTitle;
}

onMounted(() => {
  updateTitle();
});
</script>
<style scoped>
</style>

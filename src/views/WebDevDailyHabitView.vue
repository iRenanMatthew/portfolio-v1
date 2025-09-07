<template>
  <div class="section">
    <div class="habit row">
      <CategoryTitle
        title="Web Development & Data Study Tracker"
        size="5xl"
        tag="h1"
      />
      <WebDevDailyHabit />
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import WebDevDailyHabit from "@/components/WebDevDailyHabit.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const updateTitle = () => {
  const pageTitle =
    route.meta.title || "Web Development & Data Study Tracker";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle;
});
</script>

<style></style>

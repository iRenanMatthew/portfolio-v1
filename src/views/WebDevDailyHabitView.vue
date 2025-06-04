<template>
  <div class="section">
    <div class="habit row">
      <CategoryTitle
        title="Web Development Study Tracker"
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
    route.meta.title || "Studying web development for 1 hour or more each day.";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle;
});
</script>

<style></style>

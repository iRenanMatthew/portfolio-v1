<template>
  <div class="section">
    <div class="habit row">
      <CategoryTitle
        title="Daily Study Tracker: Web Dev to Data Career"
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
    route.meta.title || "Daily 1-hour study habit: Web development to data career transition";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle;
});
</script>

<style></style>

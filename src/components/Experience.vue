<template>
  <div class="mt-[100px]">
    <CategoryTitle title="EXPERIENCE" />

    <div v-if="error">{{ error }}</div>

    <div class="text-custom-gray mt-[50px]" v-if="experiences.length">
      <div class="pb-10" v-for="experience in experiences" :key="experience">
        <div class="flex justify-between">
          <div>
            <h2 class="text-custom-white text-2xl font-bold">
              {{ experience.position_title }}
            </h2>
            <p class="text-xs">
              {{ experience.company_name }} - {{ experience.company_location }}
            </p>
          </div>
          <p>{{ experience.startedAt }} - {{ experience.endAt }}</p>
        </div>

        <div class="my-2 pl-5">
          <ul
            class="list-disc"
            v-for="description in experience.description"
            :key="description"
          >
            <li>{{ description }}</li>
          </ul>
        </div>

        <div class="flex gap-3 flex-wrap">
          <p class="tags-pill" v-for="skill in experience.skills" :key="skill">
            {{ skill }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import getExperiences from "@/composables/getExperiences";
import CategoryTitle from "./CategoryTitle.vue";

const { experiences, error, loadExperiences } = getExperiences();

onMounted(() => {
  loadExperiences();
});
</script>

<style></style>

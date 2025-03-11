<template>
  <div class="experience-section mt-[100px]">
        <CategoryTitle title="EXPERIENCES" size="4xl" tag="h2"/>
        <div v-if="error">{{ error }}</div>
        <div class="exp-wrapper mt-10" v-if="experiences.length">
          <div class="exp-content flex flex-col gap-2.5 mb-24" v-for="exp in experiences" :key="exp.id">
            <div class="exp_c-position-wrapper flex justify-between sm:flex-col sm:justify-start sm:gap-1">
              <div class="exp-c-wrapper sm:flex sm:flex-col sm:gap-1">
                <h3 class="text-white font-bold text-xl">{{ exp.position_title }}</h3>
                <p class="text-custom-gray text-xs sm:text-white">{{ exp.company_name }}</p>
              </div>
                <p class="text-custom-gray self-center sm:self-start sm:text-xs">{{ exp.startedAt }} - {{ exp.endAt }}</p> 
              </div>
            <div class="exp_c-desc-wrapper flex flex-col gap-2.5">
              <ul class="exp_c-desc-text text-sm list-disc pl-5">
                <li v-for="desc in exp.description" :key="desc" class="text-custom-gray1">{{ desc }}</li>
              </ul>
              <div class="exp_c-desc-skills flex gap-2.5 flex-wrap sm:gap-1.5">
                <p class="tags-pill" v-for="skill in exp.skills" :key="skill">{{ skill }}</p>
              </div>
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

<template>
  <div class="mt-[100px]">
    <CategoryTitle title="FEATURED SKILLS" />

    <div v-if="error">{{ error }}</div>
    <div class="custom-grid my-[50px]">
      <div
        class="flex items-center flex-col"
        v-for="skill in skills"
        :key="skill.id"
      >
        <img :src="require(`@/assets/images/logo/${skill.image}.png`)" />
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import getSkills from "@/composables/getSkills";
import CategoryTitle from "@/components/CategoryTitle.vue";

// Destructure composable function
const { skills, error, loadSkills } = getSkills();

onMounted(() => {
  loadSkills();
});

</script>

<style>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 20px;
}
</style>

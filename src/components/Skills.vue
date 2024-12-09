<template>
  <div class="mt-[100px]">
    <h1 class="custom-bg-text-gradient font-extrabold text-4xl text-center">
      FEATURED SKILLS
    </h1>

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
<script>
import getSkills from "@/composables/getSkills";
export default {
  setup() {
    const { skills, error, loadSkills } = getSkills();

    loadSkills();

    const imagePath = (path) => {
      return `../src/assets/images/logo/${path}.png`;
    };
    return { skills, error, imagePath };
  },
};
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

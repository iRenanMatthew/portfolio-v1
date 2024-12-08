<template>
  <div>
    <h1 class="custom-bg-text-gradient font-extrabold text-4xl">
      FEATURED SKILLS
    </h1>

    <div v-if="error">{{ error }}</div>
    <div>
      <div v-for="skill in skills" :key="skill.id">{{ skill.name }}</div>
    </div>
  </div>
</template>
<script>
import getSkills from "@/composables/getSkills";
export default {
  setup() {
    const { skills, error, loadSkills } = getSkills();

    loadSkills();

    console.log(skills);
    return { skills, error };
  },
};
</script>

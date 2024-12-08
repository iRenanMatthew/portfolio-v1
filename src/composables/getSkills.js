import { ref } from "vue";

const getSkills = () => {
  const skills = ref([]);
  const error = ref(null);

  const loadSkills = async () => {
    try {
      let response = await fetch("/data/skills.json");
      if (response.status != 200 || !response.ok) {
        throw Error("No Data Available");
      }

      skills.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { skills, error, loadSkills };
};

export default getSkills;

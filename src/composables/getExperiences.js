import { ref } from "vue";

const getExperiences = () => {
  const experiences = ref([]);
  const error = ref(null);

  const loadExperiences = async () => {
    try {
      let response = await fetch("/data/experience.json");

      if (response.status !== 200 || !response.ok) {
        throw Error("No data available");
      }

      experiences.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { experiences, error, loadExperiences };
};

export default getExperiences;

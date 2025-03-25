import { ref } from "vue";

const getUIDesigns = () => {
  const designs = ref([]);
  const error = ref(null);

  const loadUIDesigns = async () => {
    try {
      let response = await fetch("/data/ui-designs.json");

      if (response.status !== 200 || !response.ok) {
        throw Error("No data available");
      }

      designs.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { designs, error, loadUIDesigns };
};

export default getUIDesigns;

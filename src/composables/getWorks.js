import { ref } from "vue";

const getWorks = () => {
  const works = ref([]);
  const error = ref(null);

  const loadWorks = async () => {
    try {
      let response = await fetch("/data/works.json");
      if (response.status !== 200 || !response.ok) {
        throw Error("No Data Available");
      }
      works.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { works, error, loadWorks };
};

export default getWorks;

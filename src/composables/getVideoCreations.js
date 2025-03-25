import { ref } from "vue";

const getVideoCreations = () => {
  const videos = ref([]);
  const error = ref(null);

  const loadVideoCreations = async () => {
    try {
      let response = await fetch("/data/video-creations.json");

      if (response.status !== 200 || !response.ok) {
        throw Error("No data available");
      }

      videos.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { videos, error, loadVideoCreations };
};

export default getVideoCreations;

import { ref } from "vue";

const getHeaderLinks = () => {
  const headerLink = ref([]);
  const error = ref(null);

  const loadHeaderLinks = async () => {
    try {
      let response = await fetch("/data/headerlinks.json");

      // Check response status properly
      if (!response.ok) {
        throw new Error("No data available");
      }

      // Parse JSON response
      headerLink.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { loadHeaderLinks, headerLink, error };
};

export default getHeaderLinks;

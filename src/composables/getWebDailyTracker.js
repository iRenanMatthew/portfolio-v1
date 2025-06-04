import { ref } from "vue";

const getWebDailyTracker = () => {
  const webDailyTracker = ref(null);
  const error = ref(null);

  const loadWebDailyTracker = async () => {
    const response = await fetch("../data/tracker.json");

    try {
      if (response.status !== 200 || !response.ok) {
        throw new Error("Error fetching data");
      }
      webDailyTracker.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { webDailyTracker, error, loadWebDailyTracker };
};

export default getWebDailyTracker;

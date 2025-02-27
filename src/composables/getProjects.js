import { ref } from "vue";

const getProjects = () => {
  const projects = ref([]);
  const error = ref(null);
 
  const loadProjects = async () => {
    try {
      let response = await fetch("/data/projects.json");
      if (response.status !== 200 || !response.ok) {
        throw Error("No Data Available");
      }
      projects.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { projects, error, loadProjects };
};

export default getProjects;

import { ref } from 'vue';

const getWebsiteData = () => {
    const websites = ref([]);
    const error = ref(null);

    const loadWebsiteData = async () => {

        try {
            let response = await fetch("/data/websites.json");

            if (response.status !== 200 || !response.ok) {
                throw Error("No data available");
              }

            websites.value = await response.json();
        } catch (err) {
            error.value = err.message;
        }
    }
    return { websites, error, loadWebsiteData };
}

export default getWebsiteData;


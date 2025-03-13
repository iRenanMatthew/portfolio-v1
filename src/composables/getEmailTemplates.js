import {ref} from 'vue';

const getEmailTemplates = () => {
    const emails = ref([]);
    const error = ref(null);

    const loadEmailTemplates = async () => {

        try {
            let response = await fetch("/data/email-templates.json");

            if (response.status !== 200 || !response.ok) {
                throw Error("No data available");
              }

            emails.value = await response.json();
        } catch (err) {
            error.value = err.message;
        }
    }
    return { emails, error, loadEmailTemplates };
}

export default getEmailTemplates;


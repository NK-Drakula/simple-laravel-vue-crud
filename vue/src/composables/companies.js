import { ref } from "vue"
import axios from 'axios'
import { useRouter } from 'vue-router'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
export default function useCompanies(){

    const companies = ref({});
    const company = ref({});
    const errors = ref({});
    const router = useRouter();

    const getCompanies = async () => {
        const response = await axios.get("companies");
        companies.value = response.data.data;
    }

    const getCompany = async (id) => {
        const response = await axios.get("companies/" + id);
        company.value = response.data.data;
    }

    const storeCompany = async (data) => {
        try {

            await axios.post('companies', data);
            router.push({name: "CompanyIndex"});
            
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateCompany = async (id) => {
        try {
            await axios.put("companies/" + id, company.value);
            router.push({name: "CompanyIndex"});

        } catch (error) {            
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyCompany = async (id) => {
        if (!window.confirm("Are You Sure")) {
            return;
        }
        await axios.delete("companies/" + id);
        await getCompanies();
    }

    return {
        company,
        companies,
        getCompany,
        getCompanies,
        storeCompany,
        updateCompany,
        destroyCompany,
        errors,
    }
}
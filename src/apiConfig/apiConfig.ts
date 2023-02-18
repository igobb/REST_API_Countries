import axios from "axios"

const envUrl = import.meta.env.VITE_REACT_API_URL

const url = axios.create({
    baseURL: envUrl
})

export const api = {
    getCountries: async () => {
        let response = await url.get('/all')
        return response.data
    },
    getCountry: async (name: string) => {
        let response = await url.get(`/name/${name}?fullText=true`)
        return response.data
    },
    getCountryByCode: async (code: string) => {
        let response = await url.get(`/alpha?codes=${code}`)
        return response.data
    }

}
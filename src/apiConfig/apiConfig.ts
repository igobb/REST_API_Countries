import axios from "axios";

const envUrl = import.meta.env.VITE_REACT_API_URL;

const url = axios.create({
  baseURL: envUrl,
});

export const api = {
  getCountries: async () => {
    try {
      const response = await url.get("/all");
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getCountry: async (name: string) => {
    try {
      const response = await url.get(`/name/${name}?fullText=true`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getCountryByCode: async (code: string) => {
    try {
      const response = await url.get(`/alpha?codes=${code}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

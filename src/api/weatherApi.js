import axios from 'axios';

const API_KEY = '403c0b723cc98e58ee2698f5d0674eb8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : "Unable to fetch data";
    }
};

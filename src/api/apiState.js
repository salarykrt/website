import axios from 'axios';

const API_BASE_URL = 'https://api.salarykart.in';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Auth": "N2M2Y2ZhOGNjNmRmYmM5MzFmYzE0NDMxMzIzMjBjZDI=",
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

export const submitApplication = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};


export const apiState = async () => {
    try {
        const response = await api.post('/getMasterDataARD', '{"apiname":"getstate","id":""}');
        return response.data;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}
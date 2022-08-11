import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sheet.best/api/sheets/5c03ba1a-03d8-44b6-8c04-e6a77d111cea'
})

export default api;
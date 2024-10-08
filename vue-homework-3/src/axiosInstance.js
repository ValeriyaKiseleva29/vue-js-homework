import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',

    }
});

axiosInstance.interceptors.request.use(config => {
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {

    return Promise.reject(error);
});

export default axiosInstance;

import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://translate.google.co.uk/',
});

export default axiosClient
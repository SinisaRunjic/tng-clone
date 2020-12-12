import axios from 'axios';

const instance = axios.create({
    baseURL: (process.env.PORT) ? `${process.env.PORT}` : 'http://localhost:8001',
})

export default instance;

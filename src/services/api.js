import axios from "axios";

export const api = axios.create({
    baseURL: 'https://backend-desafio-movie.onrender.com'
});
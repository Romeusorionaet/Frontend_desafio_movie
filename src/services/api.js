import axios from "axios";

export const api = axios.create({
    baseURL: 'https://backend-desafio-movie.onrender.com'
});

api.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('@rocketmovie:token')
  
    if(token) config.headers['Authorization'] = `bearer ${token}`
    
     return config
  })
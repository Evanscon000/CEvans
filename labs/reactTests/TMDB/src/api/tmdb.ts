import axios from 'axios';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: import.meta.env.VITE_TMDB_API_TOKEN,
    },
});

export default tmdb;

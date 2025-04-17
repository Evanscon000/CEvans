// src/components/Results.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tmdb from '../src/api/tmdb';
import { Box, Typography, CircularProgress } from '@mui/material';
import MovieCard from './Card';

const Results = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    useEffect(() => {
        setLoading(true);
        setError(false);

        const endpoint = query ? '/search/movie' : '/movie/now_playing';
        const params = query ? { params: { query } } : {};

        tmdb
            .get(endpoint, params)
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query]);

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
    if (error) return <Typography variant="h6" color="error" sx={{ textAlign: 'center', mt: 4 }}>Error loading movies 😢</Typography>;
    if (movies.length === 0) return <Typography variant="h6" color="textPrimary" sx={{ textAlign: 'center', mt: 4 }}>No results found 🎬</Typography>;

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" sx={{ mb: 2, color: 'text.primary' }}>
                {query ? `Search Results for "${query}"` : 'Now Playing'}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {movies.map((movie: any) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        posterPath={movie.poster_path}
                        rating={movie.vote_average}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Results;

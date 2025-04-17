import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import missingPoster from '../src/assets/MissingPoster.png';

type MovieProps = {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
};

const MovieCard = ({ title, overview, posterPath, rating }: MovieProps) => {
    const imageURL = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : missingPoster;

    return (
        <Card sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="450"
                image={imageURL}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom color="text.primary">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    ⭐ {rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview.length > 100 ? overview.slice(0, 100) + '...' : overview}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;

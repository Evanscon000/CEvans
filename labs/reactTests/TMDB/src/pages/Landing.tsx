// src/pages/Landing.tsx
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import landingBg from '../assets/landing-bg.jpg';


const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/results');
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${landingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'calc(100vh - 64px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                padding: 2,
            }}
        >

        <Typography variant="h2" sx={{ mb: 4 }}>
                Welcome to TMDB
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClick}>
                See What's Playing Now
            </Button>
        </Box>
    );
};

export default Landing;

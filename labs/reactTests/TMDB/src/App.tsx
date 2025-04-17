// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Landing from '../src/pages/Landing';
import Results from '../components/Results';
import Error from '../components/Error';
import { Box, Typography } from '@mui/material';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Box sx={{ minHeight: 'calc(100vh - 64px - 50px)', px: 2 }}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="*" element={<Error message="Page not found" />} />
                </Routes>
            </Box>
            <Box sx={{ mt: 6, textAlign: 'center', py: 2, backgroundColor: 'background.paper' }}>
                <Typography variant="body2" color="text.secondary">
                    Powered by TMDB API · Built by Connor
                </Typography>
            </Box>
        </Router>
    );
};

export default App;

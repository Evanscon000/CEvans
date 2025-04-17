// src/components/NavBar.tsx
import { AppBar, Toolbar, Typography, Box, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/results?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#222' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* App Title */}
                <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    TMDB App
                </Typography>

                {/* Navigation + Search */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/results">Now Playing</Button>

                    {/* Search Bar */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField
                            size="small"
                            variant="outlined"
                            placeholder="Search movies"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSearch();
                            }}
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 1,
                                input: { color: 'black' },
                            }}
                        />
                        <Button variant="contained" color="secondary" onClick={handleSearch}>
                            Search
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

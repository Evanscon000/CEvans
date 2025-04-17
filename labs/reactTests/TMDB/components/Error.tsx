import { Typography, Box } from '@mui/material';

const Error = ({ message = "Something went wrong 😞" }) => {
    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5" color="error">{message}</Typography>
        </Box>
    );
};

export default Error;

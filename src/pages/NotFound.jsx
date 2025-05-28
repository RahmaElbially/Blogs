import { Box, Typography } from '@mui/material';
import React from 'react';

function NotFound() {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: '20px',

            }}

        >
            <img
                src="not found.gif"
                alt="Not Found"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
            />
            <Typography component='h2' variant='h5' sx={{ color: '#184655', fontWeight: 'bold' }}>
                Oops! The page you're looking for doesn't exist.
            </Typography>
        </Box>
    );
}

export default NotFound;

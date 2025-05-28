import React from 'react';
import { Box } from '@mui/material';

export default function Loader() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                zIndex: 1300,
            }}
        >
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    color: '#184655',
                    transform: 'rotateZ(45deg)',
                    perspective: 1000,
                    position: 'relative',
                    '&::before, &::after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 'inherit',
                        height: 'inherit',
                        borderRadius: '50%',
                        transform: 'rotateX(70deg)',
                        animation: 'spin 1s linear infinite',
                        boxShadow: '.2em 0 0 0 currentColor',
                    },
                    '&::after': {
                        color: '#1976d2',
                        transform: 'rotateY(70deg)',
                        animationDelay: '0.4s',
                    },
                    '@keyframes spin': {
                        '0%, 100%': { boxShadow: '.2em 0 0 0 currentColor' },
                        '12%': { boxShadow: '.2em .2em 0 0 currentColor' },
                        '25%': { boxShadow: '0 .2em 0 0 currentColor' },
                        '37%': { boxShadow: '-.2em .2em 0 0 currentColor' },
                        '50%': { boxShadow: '-.2em 0 0 0 currentColor' },
                        '62%': { boxShadow: '-.2em -.2em 0 0 currentColor' },
                        '75%': { boxShadow: '0px -.2em 0 0 currentColor' },
                        '87%': { boxShadow: '.2em -.2em 0 0 currentColor' },
                    },
                }}
            />
        </Box>
    );
}

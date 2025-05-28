import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function AuthImage() {
    const location = useLocation();
    const isLogin = location.pathname === '/login';

    return (
        <>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#184655',
                    borderRadius: '10px 0 0 10px',
                    px: 4,
                    overflow: 'hidden',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        mb: 2,
                        lineHeight: 1.5,
                        fontFamily: 'Jacques Francois, serif',
                    }}
                >
                    Start your journey with us and share your stories
                </Typography>
                <motion.img
                    src="signUp.png"
                    alt="Auth Illustration"
                    width={350}
                    initial={{ y: isLogin ? 100 : -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: isLogin ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                />
            </Box>
        </>
    )
}

export default AuthImage

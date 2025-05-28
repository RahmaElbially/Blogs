import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AuthImage from '../../shared/layouts/AuthImage'
import { Lock, MailOutline, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/auth'

function Login() {

    // Show Password
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    // Form Validation
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();

    // Submit and navigate to home
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data);
            localStorage.setItem('token', response.token);
            localStorage.setItem('userImage', response.user.image)
            reset();
            navigate('/', { replace: true });
        } catch (err) {
            if (err.response.status === 400) {
                setError('email', {
                    type: 'manual',
                    message: 'Invalid Email / Password'
                });
                setError('password', {
                    type: 'manual',
                    message: 'Invalid Email / Password'
                })
            } else {
                console.log(err);
            }
        }
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { sm: 'column', md: 'row' },
                    width: { xs: '80%', md: '90%', lg: '80%' },
                    height: '100vh',
                    margin: 'auto',
                    py: 5
                }}
            >
                <AuthImage />

                <Box
                    sx={{
                        flex: 2,
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#CEEAE4',
                        borderRadius: { xs: '10px', md: '0 10px 10px 0' },
                        px: 4,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 2,
                            width: '80%',
                            color: '#184655',
                            fontFamily: 'Jacques Francois, serif',
                        }}
                    >
                        Welcome Back
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            width: { sm: '80%', md: '100%', lg: '80%' },
                            mt: 4,
                        }}
                    >

                        <TextField
                            label="Email"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#184655',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: '#184655',
                                },
                                maxHeight: '4rem'
                            }}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutline />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="outlined"
                            {...register('email', {
                                required: { value: true, message: "Email is required" },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
                                    message: "Email not valid"
                                }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <TextField
                            label="Password"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#184655',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: '#184655',
                                },
                                maxHeight: '4rem'
                            }}
                            type={showPassword ? "text" : "password"}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="outlined"
                            {...register('password', {
                                required: { value: true, message: 'Password is required' }
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                textTransform: 'none',
                                fontSize: '1.2rem',
                                py: 1.5,
                                backgroundColor: '#184655',
                                color: '#fff',
                                borderRadius: '5px',
                                '&:hover': {
                                    backgroundColor: '#163d4d',
                                },
                            }}
                        >
                            Login
                        </Button>
                        <Box sx={{
                            mt: { xs: 0, md: -1, lg: -2 },
                            display: 'flex',
                            justifyContent: 'end'
                        }}>
                            <Link
                                style={{
                                    fontSize: '18px',
                                    textDecoration: 'none',
                                    color: '#184655',
                                }}
                                to={'/signup'}
                            >
                                Don't have account?
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Login

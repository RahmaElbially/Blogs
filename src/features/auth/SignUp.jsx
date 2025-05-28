import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import {
    Person,
    MailOutline,
    Lock,
    VisibilityOff,
    Visibility,
    CheckCircle,
    Cancel,
} from "@mui/icons-material";
import AuthImage from "../../shared/layouts/AuthImage";
import { createUser } from "../../api/auth";

function SignUp() {

    // Show Password
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    // Form Validation
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setError,
        formState: { errors },
    } = useForm();

    const password = watch("password") || "";

    const conditions = [
        {
            label: "Password must be at least 8 characters",
            valid: password.length >= 8,
        },
        {
            label: "Password must contain at least one uppercase letter",
            valid: /[A-Z]/.test(password),
        },
        {
            label: "Password must contain at least one number",
            valid: /\d/.test(password),
        },
        {
            label: "Password must contain at least one special character (!@#$%^&*)",
            valid: /[!@#$%^&*]/.test(password),
        },
    ];

    const allValid = conditions.every((cond) => cond.valid);

    // Submit and navigate to login
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        if (allValid) {
            try {
                const response = await createUser(data);
                reset();
                navigate('/login');
            } catch (err) {
                if (err.response?.status === 400) {
                    setError('email', {
                        type: 'manual',
                        message: err.response.data.message || 'Email already exists, Please login.'
                    });
                } else {
                    console.log(err);
                }
            }
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { sm: 'column', md: 'row' },
                    width: { xs: '80%', md: '90%', lg: '80%' },
                    height: { xs: '115vh', sm: '100vh' },
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
                        Create Account
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 3, sm: 4, md: 3, lg: 4 },
                            width: { md: '100%', lg: '80%' },
                            mt: 4,
                        }}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            gap={3}
                        >
                            <TextField
                                sx={{
                                    flex: 1,
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
                                label="First Name"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                {...register("firstName", {
                                    required: { value: true, message: "First name is required" },
                                    maxLength: { value: 20, message: "Max 20 characters" },
                                    pattern: { value: /^[A-Za-z]+$/i, message: "First name not valid" },
                                })}
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />

                            <TextField
                                sx={{
                                    flex: 1,
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
                                label="Last Name"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                {...register("lastName", {
                                    required: { value: true, message: "Last name is required" },
                                    maxLength: { value: 20, message: "Max 20 characters" },
                                    pattern: { value: /^[A-Za-z]+$/i, message: "Last name not valid" },
                                })}
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
                        </Box>

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
                            {...register("email", {
                                required: { value: true, message: "Email is required" },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email not valid",
                                },
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
                            {...register("password", {
                                required: "Password is required",
                            })}
                            error={!!errors.password && !allValid}
                            helperText={errors.password?.message}
                        />
                        {
                            password.length > 0 && !allValid && (
                                <Box sx={{ mt: -1 }}>
                                    {conditions.map((cond, i) => (
                                        <Typography
                                            key={i}
                                            variant="body2"
                                            sx={{
                                                color: cond.valid ? "#184655" : "red",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                mt: 0.5
                                            }}
                                        >
                                            {cond.valid ? (
                                                <CheckCircle fontSize="small" />
                                            ) : (
                                                <Cancel fontSize="small" />
                                            )}
                                            {cond.label}
                                        </Typography>
                                    ))}
                                </Box>
                            )
                        }

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
                            Create Account
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
                                to={'/login'}
                            >
                                Already have an account?
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default SignUp

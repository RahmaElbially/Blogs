import React, { useEffect, useState } from "react";
import {
    Container,
    Box,
    Typography,
    Avatar,
    TextField,
    Grid,
} from "@mui/material";
import { getUserById } from "../api/user";
import { toast } from "react-toastify";
import Loader from "../shared/components/Loading";

function Profile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await getUserById();
                setUser(response.data);
            } catch (err) {
                setError(err.message || "Failed to load user data");
                toast.error('Faild to load user data');
            } finally {
                setLoading(false);
            }
        }

        getUser();
    }, []);

    if (loading) {
        return (
            <Container sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
                <Loader />
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 6 }}>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#184655", fontWeight: "bold" }}>
                User Profile
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    mb: 4,
                }}
            >
                <Avatar
                    src={user.image || "default-avatar-url.jpg"}
                    alt={`${user.firstName} ${user.lastName}`}
                    sx={{ width: 120, height: 120 }}
                />
            </Box>

            <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item size={{ xs: 12 }}>
                        <TextField
                            label="First Name"
                            fullWidth
                            defaultValue={user.firstName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={{ xs: 12 }}>
                        <TextField
                            label="Last Name"
                            fullWidth
                            defaultValue={user.lastName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={{ xs: 12 }}>
                        <TextField
                            label="Email"
                            fullWidth
                            defaultValue={user.email}
                            variant="outlined"
                            disabled
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Profile;

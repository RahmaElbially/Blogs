import React, { useEffect, useState } from 'react'
import HeroSection from '../shared/layouts/HeroSection'
import BlogCard from '../shared/components/BlogCard'
import { Box, Container, Grid, Typography } from '@mui/material'
import FloatingButton from '../shared/components/FloatingButton'
import { deleteBlog, getAllBlogs } from '../api/blogs'
import { toast } from 'react-toastify'
import LoadingSpinner from '../shared/components/Loading'
import Loader from '../shared/components/Loading'

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get User Data From Local Storage
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    const handleDeleteBlog = async (id) => {
        try {
            await deleteBlog(id);
            toast.success("Blog deleted successfully");
            setBlogs(prev => prev.filter(blog => blog._id !== id));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getAllBlogs();
                setBlogs(response.data);
            } catch (err) {
                console.log(err);
                setError('Failed to load blogs. Please try again later.');
                toast.error('Failed to load blogs. Please try again later')
            } finally {
                setLoading(false);
            }
        }
        getBlogs();
    }, [])

    return (
        <>

            <HeroSection />
            <Container>
                <Typography variant='h5' component='h2'
                    sx={{
                        color: '#184655',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        mt: 8,
                        mb: 3
                    }}>
                    Latest Articles
                </Typography>

                {loading && <Loader />}

                {!loading && error && (
                    <Box
                        sx={{
                            mt: 5,
                            color: 'error.main',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                        }}
                    >
                        {error}
                    </Box>
                )}

                {!loading && !error && blogs.length === 0 && (
                    <Box
                        sx={{
                            mt: 5,
                            color: 'text.secondary',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                        }}
                    >
                        No blogs found.
                    </Box>
                )}

                {!loading && !error && blogs.length > 0 && (
                    <Grid container spacing={4}>
                        {
                            blogs.map((blog) => (
                                <Grid item size={{ xs: 12, sm: 6, lg: 4 }} key={blog._id}>
                                    <BlogCard blog={blog} onDelete={handleDeleteBlog} />
                                </Grid>
                            ))
                        }
                    </Grid>
                )
                }
            </Container>
            {
                isLoggedIn && (

                    <FloatingButton />
                )
            }

        </>
    )
}

export default Blogs

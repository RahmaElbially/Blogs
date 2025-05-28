import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { getAllBlogs } from "../api/blogs";
import BlogCard from "../shared/components/BlogCard";
import Loader from "../shared/components/Loading";

const Categories = () => {
    const [groupedBlogs, setGroupedBlogs] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogs = await getAllBlogs();

                const grouped = blogs.data.reduce((acc, blog) => {
                    if (!acc[blog.category]) {
                        acc[blog.category] = [];
                    }
                    acc[blog.category].push(blog);
                    return acc;
                }, {});

                setGroupedBlogs(grouped);
            } catch (err) {
                setError(err.message || "Failed to fetch blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <Loader />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container sx={{ mt: 5 }}>
            {Object.keys(groupedBlogs).map((category) => (
                <Box key={category} sx={{ mb: 6 }}>
                    <Typography
                        variant="h5"
                        sx={{ mb: 3, fontWeight: "bold", color: "#184655" }}
                    >
                        {category}
                    </Typography>

                    <Grid container spacing={3}>
                        {groupedBlogs[category].map((blog) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={blog._id}>
                                <BlogCard blog={blog} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Container>
    );
};

export default Categories;

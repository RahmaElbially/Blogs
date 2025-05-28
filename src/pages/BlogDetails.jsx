import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { getBlogById } from "../api/blogs";
import { useParams } from "react-router-dom";
import Loader from "../shared/components/Loading";

function BlogDetails() {

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data.data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to load blog details.')
      } finally {
        setLoading(false);
      }
    }
    getBlog();
  }, [])

  return (
    <>
      {
        loading ? (<Loader />)
          : (
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={blog.image}
                  alt="Blog image"
                />

                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {blog.title}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar
                      src={blog.userId?.image} alt={blog.userId?.firstName}
                    />
                    <Box>
                      <Typography variant="subtitle1">{blog.userId?.firstName} {blog.userId?.lastName}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                        {/* {blog.date} • {blog.time} */}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="body1" color="textPrimary">
                    {blog.description}
                  </Typography>
                </CardContent>
              </Card>
            </Container >
          )
      }
    </>
  );
}

export default BlogDetails;

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  IconButton,
  Avatar,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function BlogCard({ blog, onDelete }) {
  const [hovered, setHovered] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : null;
  const currentUserId = decoded?.id

  const navigate = useNavigate();

  const navigateToEditBlog = () => {
    navigate(`blogs/edit/${blog._id}`);
  }

  const handleConfirmDelete = (confirmed) => {
    if (confirmed && onDelete) {
      onDelete(blog._id)
    }
    setOpenConfirm();
  }

  return (
    <>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          overflow: "hidden",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          height: 510,
          ":hover": {
            boxShadow: 6,
          },
        }}
      >
        {/* Image with overlay actions */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={blog.image || "card1.jpeg"}
            alt="Blog"
            sx={{
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          <Chip
            label={blog.category}
            sx={{
              position: "absolute",
              top: 16,
              left: 8,
              backgroundColor: "rgb(253,253,254)",
              color: "rgb(31 41 55)",
              fontWeight: "bold",
              textTransform: 'capitalize'
            }}
          />

          {hovered && currentUserId === blog.userId._id && (
            <Box sx={{ position: "absolute", top: 16, right: 8 }}>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#ffffffe6",
                  mr: 1,
                  color: "rgb(37,99,235)",
                  ":hover": {
                    backgroundColor: "rgb(219,234,254 )",
                  },
                }}
                onClick={navigateToEditBlog}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#ffffffe6",
                  color: "rgb(220,38,38)",
                  ":hover": {
                    backgroundColor: "rgb(254, 226, 226)",
                  },
                }}
                onClick={() => setOpenConfirm(true)}
              >
                <DeleteIcon fontSize="small" color="error" />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Content */}
        <CardContent>
          <Box height={220}>
            <Box height={160}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: hovered ? "#1976d2" : "inherit",
                  transition: "color 0.3s ease",
                }}
              >
                {blog.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                  fontSize: 16,
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {blog.description}
              </Typography>
            </Box>

            {/* Author Info */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Avatar
                src={blog.userId.image}
                sx={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(45deg, #1976d2  10%, #184655 70%)",
                  mr: 2,
                  fontSize: "16px",
                }}
              >
                {/* {`${blog.userId.firstName[0].toUpperCase()}${blog.userId.lastName[0].toUpperCase()}`} */}
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight="bold" textTransform='capitalize'>
                  {blog.userId.firstName} {blog.userId.lastName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
              </Box>
              <Box flexGrow={1} />
              <Chip
                label={`${blog.readTime || 5} min read`}
                variant="filled"
                size="small"
                sx={{ fontSize: "12px" }}
              />
            </Stack>
          </Box>
          <Divider />
          <Link
            to={`/blogs/${blog._id}`}
            style={{
              display: "block",
              textDecoration: hovered ? "underline" : "none",
              color: "#1976d2",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginTop: "2rem",
              transition: "text-decoration 0.3s",
            }}
          >
            Read More →
          </Link>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirm}
        onClose={() => handleConfirmDelete(false)}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle
          id="confirm-dialog-title"
          sx={{
            color: '#184655',
            fontWeight: 'bold'
          }}
        >
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Are you sure you want to delete this blog? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              textTransform: 'capitalize',
              fontSize: 16
            }}
            onClick={() => handleConfirmDelete(false)}
          >
            Cancel
          </Button>
          <Button
            color="error"
            sx={{
              textTransform: 'capitalize',
              fontSize: 16
            }}
            onClick={() => handleConfirmDelete(true)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BlogCard;

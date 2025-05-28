import React, { useState, useEffect } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { addBlog, editBlog, getBlogById } from "../api/blogs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../shared/components/Loading";

function AddEditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //   Form Validation
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const response = await getBlogById(id);

        setValue("title", response.data.title || "");
        setValue("description", response.data.description || "");
        setValue("category", response.data.category || "");
        setValue("image", response.data.image || "");

      } catch (err) {
        console.log(err);
        toast.error('Failed to load blog data.')
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      getBlogs();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await editBlog(id, data);
        toast.success("Blog updated successfully!");
      } else {
        await addBlog(data);
        toast.success("Blog added successfully!");
      }
      reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" mb={3} sx={{ color: "#184655" }}>
        {id ? "Edit Blog" : "Add New Blog"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
          {...register("description", {
            required: { value: true, message: "Description is required" },
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
          {...register("category", {
            required: { value: true, message: "Category is required" },
          })}
          error={!!errors.category}
          helperText={errors.category?.message}
        />


        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
          {...register("image", {
            required: { value: true, message: "Image URL is required" },
          })}
          error={!!errors.image}
          helperText={errors.image?.message}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            textTransform: "none",
            fontSize: "1.2rem",
            py: 1.5,
            backgroundColor: "#184655",
            color: "#fff",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#163d4d",
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default AddEditBlog;

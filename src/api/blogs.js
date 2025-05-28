import axiosInstance from "./axiosInstance";

export const getAllBlogs = async () => {
    const res = await axiosInstance.get("/blogs");
    return res.data
};

export const getBlogById = async (id) => {
    const res = await axiosInstance.get(`/blogs/${id}`);
    return res.data
};

export const addBlog = async (blogData) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("Token not found. User is not logged in.");
    }

    const res = await axiosInstance.post("/blogs", blogData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
}

export const editBlog = async (id, blogData) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("Token not found. User is not logged in.");
    }

    const res = await axiosInstance.patch(`/blogs/${id}`, blogData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
};

export const deleteBlog = async (id) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("Token not found. User is not logged in.");
    }

    const res = await axiosInstance.delete(`/blogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data
}
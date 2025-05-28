import axiosInstance from "./axiosInstance";
import { jwtDecode } from "jwt-decode";

export const getUserById = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("Token not found. User is not logged in.");
    }

    const decoded = jwtDecode(token);
    const userId = decoded.id;

    const res = await axiosInstance.get(`/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};


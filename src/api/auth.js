import axios from "axios";
import axiosInstance from "./axiosInstance";

export const createUser = async (userData) => {
  const res = await axiosInstance.post("/users", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axiosInstance.post("/users/login", userData);
  return res.data;
};

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "../features/auth/SignUp";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/NotFound";
import Login from "../features/auth/Login";
import { AnimatePresence } from "framer-motion";
import LayoutWithNavFooter from "../shared/layouts/LayoutWithNavFooter";
import LayoutWithoutNavFooter from "../shared/layouts/LayoutWithoutNavFooter";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import BlogDetails from "../pages/BlogDetails";
import AddEditBlog from "../pages/AddEditBlog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "../pages/Profile";
import ScrollToTop from "../shared/components/ScrollToTop";
import Categories from "../pages/Categories";

function AppRoutes() {
  return (
    <div>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes>
          <Route element={<LayoutWithNavFooter />}>
            <Route path="/" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogs/add" element={<AddEditBlog />} />
            <Route path="/blogs/edit/:id" element={<AddEditBlog />} />
          </Route>

          <Route element={<LayoutWithoutNavFooter />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AppRoutes;

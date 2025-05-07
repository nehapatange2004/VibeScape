import { Dashboard } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../components/dashboard";
import NavBar from "../components/navbar.tsx";
import Gallery from "../components/gallery.tsx";
import Register from "../components/register.tsx";
import ImageDetails from "../components/image_details.tsx";
const AppRouters = () => {
  // let index = 0;
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/dashboard" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path={`/dashboard/image-details`} element={<ImageDetails/>} />
      </Routes>
    </>
  );
};

export default AppRouters;

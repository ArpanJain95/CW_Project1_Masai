import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Integrations } from "../pages/Integrations";
import { Blog } from "../pages/Blog";
import { Features } from "../pages/Features";
import { Tryitfree } from "../pages/Tryitfree";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";
import { Projects } from "../pages/Projects";

export const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/integrations" element={<Integrations/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/tryitfree" element={<Tryitfree/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    )
}
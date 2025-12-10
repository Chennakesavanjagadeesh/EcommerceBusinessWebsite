import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DashboardHome from "./pages/AdminDashboard/DashboardHome";
import ManageProducts from "./pages/AdminDashboard/ManageProducts";
import ManageBlog from "./pages/AdminDashboard/ManageBlog";
import ViewSubmissions from "./pages/AdminDashboard/ViewSubmissions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<DashboardHome />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/blog" element={<ManageBlog />} />
        <Route path="/admin/submissions" element={<ViewSubmissions />} />
      </Routes>
    </Router>
  );
}

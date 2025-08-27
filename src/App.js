import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Products from "./components/Products";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"; // Import the Dashboard component
import CartDrawer from "./components/CartDrawer";
import CheckoutPage from "./components/CheckoutPage";

import "./App.css";

function App() {
  return (
    <CartProvider>
      {/* Add basename="/green" for GitHub Pages */}
      <Router basename="/green">
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;